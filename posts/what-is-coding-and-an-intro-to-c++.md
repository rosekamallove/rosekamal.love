---
title: "What is Coding & and an intro to C++"
date: "2021-12-19"
---

## Coding on a very High Level:

**What is Coding / Programming?**

Coding, sometimes called computer programming, is how we communicate with computers. Code tells a computer what actions to take, and writing code is like creating a set of instructions. By learning to write code, you can tell computers what to do or how to behave in a much faster way. You can use this skill to make websites and apps, process data, and do lots of other cool things.

**Why learn how to code?**

We all have hopes, dreams, and plans for the future. Whether you’re looking for a new opportunity, want to optimize your current job, or are simply searching for a new hobby, coding can help you get closer to your goals. And remember, anyone can learn how to code!

**Learn skills that will open doors**

Computer and information technology jobs are growing incredibly fast in the United States and across the globe. You don't need a Computer Science degree; there are more and more high-paying jobs emerging every day for newer learners like you.

**Make Cool Stuff**

Ever wanted to make an app or a website? Code does that. It can also help you automate a spreadsheet or create new tools for your community. Learning to code makes it possible to imagine the things you want to make and actually build them.

**Have Loads of Fun**

Have you ever met a coder who regretted learning to code? Probably not, because learning to code is fun and empowering! Coding also opens up a whole new community and network for you. In fact, we've heard the term "addictive" regularly.

---

### Now let's discuss specifically what C++ coding is

As we discussed earlier writing a program is a way to communicate with the computer and **communication** is the key
word here,

How do we communicate?

Let's make a scenario, you meet a person who lives in South India and he doesn't speak hindi. But he does speak
english. And since you know how to speak english naturally you both speak in english as it is a middle ground
between you guys.

Now, guess what language the computer understands
The computer only understand 1's and 0's

Here: this is a program that prints `Hello World!` on the screen but this still isn't 0's and 1's, hence it is
converted to 0's and 1's (machine code more specifically)

**ASM (Assembly Language) Example:**

```asm
global _start
section .text

\_start:
mov rax, 1 ; write(
mov rdi, 1 ; STDOUT_FILENO,
mov rsi, msg ; "Hello, world!\n",
mov rdx, msglen ; sizeof("Hello, world!\n")
syscall ; );

mov rax, 60 ; exit(
mov rdi, 0 ; EXIT_SUCCESS
syscall ; );

section .rodata
msg: db "Hello, world!", 10
msglen: equ $ - msg
```

This is still very hard to learn, even tho it is the closes to machine code.
Now enter `C++`

```cpp
#include<iostream>

int main() {
  std::cout<<"Hello World";
  return 0;
}
```

Coming back to the analogy of the South Indian boy, what if you didn't even knew how to speak english

And talking to that guy and start somethign that can get you a job in the future?

I would definately learn english and start talking to that guy. What about you?

Here, `C++` is the `English` for you and `Computer/Laptop` is the `South Indian Guy`.

---

![Wait a Minute](https://c.tenor.com/IJwsfw7ToiQAAAAM/wait-what.gif)

You Guys don't even know how to **speak**

So C++ is going to be a way for you to learn how to **communicate** with the processor

---

### Different Stages of Writing a C++ Program:

1. **Writing the code:**

- `C++` is written in a file ending with `.cpp` for ex: `hello.cpp`
- You can use anything you like (VSCode, Sublime Text, Visual Studio, VIM, Notepad++) god forbid don't use Microsoft
  Word or Google Docs
- Here is a sample program:

```cpp
#include<iostream>

 int main() {
   std::cout<<"Hello World";
   return 0;
 }
```

2. **Compiling the C++ code and running it:**

- As we discussed earlier a computer **only** understands `1's and 0's/Machine Code` so we need to do something to convert our
  human readable `C++` code into machine readable `Machine Code`
- The process of converting this `C++` code that we just wrote into the `Machine` code is knows as compilation
- We generally use `g++`, `gcc` more specifically to do this compilation.
- To compile a `.cpp` file we do the following steps:
  - run `g++ filename.cpp` this will grate a `a.out` in the current directory on unix macines and a `a.exe` on
    windows machine
  - If you look into these files you will find speacial characters which you can't understand (Machine Code)
  - Now to run this you simply type `./a.out` on unix and `a.exe` on windows.
