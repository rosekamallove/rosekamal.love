---
title: 'Cryptography 101'
date: '2022-05-06'
description: 'This is a write-up post for the Cryptography video that Fireship.io has published, hope you like it.'
og_description: 'Getting started with cryptography in Node.js'
cover_image: 'https://www.thesslstore.com/blog/wp-content/uploads/2017/12/Primitive-Encryption-1024x303.png'
tags: 'node, cryptography, hashing'
devUrl: 'cryptography-in-nodejs-22ai'
published: true
featured: false
---

The mysterious discipline of cryptography is the backbone of the internet. Without it,
there would be no secrets and no privacy in the digital world. As a developer, you don’t
need to understand the math that goes into cryptography, but it’s absolutely essential to
know key concepts like hashes, salt, keypairs, encryption, and signing.

The follow tutorial explains essential cryptography concepts and implements then with the builtin [Node.js crypto module](https://nodejs.org/api/crypto.html)

#### 1. **Hash**

---

The word hash actually has [culinary roots](https://softwareengineering.stackexchange.com/questions/108124/why-it-is-called-hash-table-or-hash-function-hash-doesnt-make-any-sense-t). It means to _chop and mix_ and that perfectly describes what a
hashing function does. It takes an input value of any length and outputs a fixed length value. Hashing algorithms,
like **SHA** (Secure Hashing Algorithm), produce a random, unique, fixed-length string from a given input. They are
often used to compare two values, like passwords, for equality.

- The same input will always produce the same output.
- Fast to compute, but computationally expensive to find the original input
- Small proability of collision (unique)

```txt
Hello World -> {Hashing Function} => jibbrish(hashed stuff)
```

**Implementation:**

```js
const { createHash } = require('crypto')

// Create a string hash

function hash(str) {
  return createHash('sha256').update(str).digest('hex')
}

// Compare two hashed passwords

let password = 'hi-mom!'
const hash1 = hash(password)
console.log(hash1)

// ... some time later

password = 'hi-mom'
const hash2 = hash(password)
const match = hash1 === hash2

console.log(match ? 'good password' : 'password does not match')
```

<br/>

#### 2. **Salt**

---

Hashes are great for making passwords unreadable, but because they always produce the same output,
they are not very secure. A salt is a random string that is added to the input before hashing.
This makes the hash more unique and harder to guess.

Users often to use weak passwords, like “password123”. When a database is compromised, the attacker can easily find the value
of an unsalted hash by searching precomputed [rainbow table](https://en.wikipedia.org/wiki/Rainbow_table) of common hashes - salting fixes this.

- Used to make a hash harder to guess
- Appends a random string to the input before hashing

```txt
Hello World --(+random salt)--> {Hashing Function} => jibbrish(salted hashed stuff)
```

**Implementation**

```js
const { scryptSync, randomBytes, timingSafeEqual } = require('crypto')

function signup(email, password) {
  const salt = randomBytes(16).toString('hex')
  const hashedPassword = scryptSync(password, salt, 64).toString('hex')

  const user = { email, password: `${salt}:${hashedPassword}` }

  users.push(user)

  return user
}

function login(email, password) {
  const user = users.find(v => v.email === email)

  const [salt, key] = user.password.split(':')
  const hashedBuffer = scryptSync(password, salt, 64)

  const keyBuffer = Buffer.from(key, 'hex')
  const match = timingSafeEqual(hashedBuffer, keyBuffer)

  return match ? 'login success' : 'login fail'
}

const users = []

const user = signup('foo@bar.com', 'pa$$word')

console.log(user)

const result = login('foo@bar.com', 'password')

console.log(result)
```

<br>

#### 3. **HMAC**

---

HMAC is a keyed hash of data - like a hash with a password.
To create a HMAC you need to have the key, therefore allowing you to verify both the authenticity and
originator of the data. Using a different key produces a different output.

- Think of HMAC as a hash with a password or key
- Only someone with the key can create an authentic hash

```txt
Hello World  --> {Hashing Function} => jibbrish(hashed stuff)
               |                    |
               |____ Shared Key ____|
```

**Implementation:**

```js
const { createHmac } = require('crypto')

const password = 'super-secret!'
const message = '🎃 hello jack'

const hmac = createHmac('sha256', password).update(message).digest('hex')

console.log(hmac)
```

<br/>

#### 4. **Symmetric Encryption**

---

Encryption is the process making a message confidential (like a hash),
while allowing it to be reversable (decrypted) with the proper key. Each time a message
is encrypted it is randomized to produce a different output. In _symmetric encryption_, the same key
is used to encrypt and decrypt the message.

- The same input will produce a different output, unlike hashes
- Encrypted message can be reversed with the key
- Same key used to encrypt and decrypt message

```txt
Hello World  --encrypt--> {jibbrish} --decrypt--> Hello World
                 |                        |
                 |______ Shared Key ______|
```

**Implementation:**
Perform symmetric encryption in Node by creating a cipher. Encryption also has an initialization
vector (IV) to randomize the pattern so a sequence of text won’t produce the same output as a previous sequence.

```js
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto')

/// Cipher

const message = 'i like turtles'
const key = randomBytes(32)
const iv = randomBytes(16)

const cipher = createCipheriv('aes256', key, iv)

/// Encrypt

const encryptedMessage =
  cipher.update(message, 'utf8', 'hex') + cipher.final('hex')
console.log(`Encrypted: ${encryptedMessage}`)

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv)
const decryptedMessage =
  decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8')
console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`)
```

<br>

#### 5. **KeyPairs**

---

Using a shared key works for encryption works, but the problem is that both parties must agree upon the key.
This is problematic in the real world because it’s not practical or secure to share across a network. The
solution is to use an algoritm like [RSA](https://en.wikipedia.org/wiki/RSA_cryptosystem) that generates a keypair containing a public and private key.
As their names indicate, the private key should be kept secret, while the public key can be shared freely.

```txt
Public Key <---- Mathematically Linked ----> Private Key
```

**Implementation:**

```js
const { generateKeyPairSync } = require('crypto')

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
    format: 'pem'
  }
})

console.log(publicKey)
console.log(privateKey)
```

<br/>

### 6. **Asymetric Encryption**

---

Asymmetric encryption depends on two keys. Encrypt a message with the public key and decrypt it with the private key.

Asymmetric encryption is used on the web whenever you use HTTPS to establish an encrypted connection to that website.
The browser finds the public key of an SSL certificate installed on the website, which is used to encrypt any data
you send, then the private key decrypts it.

```txt
Hello World  --encrypt--> {jibbrish} --decrypt--> Hello World
                 |                        |
                 |                        |
              Public Key              Private Key
```

**Implementation:**

```js
const { publicEncrypt, privateDecrypt } = require('crypto')
const { publicKey, privateKey } = require('./keypair')

const encryptedData = publicEncrypt(publicKey, Buffer.from(secretMessage))

console.log(encryptedData.toString('hex'))

const decryptedData = privateDecrypt(privateKey, encryptedData)

console.log(decryptedData.toString('utf-8'))
```
