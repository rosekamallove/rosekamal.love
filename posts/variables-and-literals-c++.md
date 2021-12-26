---
title: "Varibales, Literals and Datatypes in C++"
date: "2021-12-21"
---

Today we'll learn about variables, literals and constants in C++ with the help of examples

### C++ Variable

In programming, a variable is a container (storage area) to hold data.

To indicate the storage area, each variable should be given a unique name (identifier). For example,

```cpp
int age = 14;
```

Here, `age` is a variable of th `int` data type, and we have assigned an integer of value `14` to it

> **Note:** The int data type suggests that the variable can only hold integers. Similarly, we can use the double data type if we have to store decimals and exponentials.

The value of a variable can be changed hence the name variable

```cpp
int age = 14; // age is 14
age = 17; // age is now 17
```

#### Rules for naming a variable

- A variable name can only have alphabets, numbers, and the underscore `_`.
- A variable name cannot begin with a number.
- It is a preferred practice to begin variable names with a lowercase character. For example, `name` is preferable to `Name`
- A variable name cannot be a keyword. For example, `int` is a keyword that is used to denote integers.
- A variable name can start with an underscore. However, it's not considered a good practice.

> **Note:** We should try to give meaningful names to variables. For example, `first_name` is a better variable name than `fn`.

### C++ Literal

Literals are data used for representing fixed values. They can be used directly in the code. For example: 1, 2.5, 'c' etc.

Here, `1`, `2.5` and `'c'` are literals. Why? You cannot assign different values to these terms.

**Here's a list of different literals in C++ programming:**

**1. Integers**

An integer is a numeric literal(associated with numbers) without any fractional or exponential part. There are three types of integer literals in C++ programming:

- decimal (base 10)
  ( these two can be ignored for now )
- octol (base 8)
- hexadecimal (base 16)

```
Decimal: 0, -9, 22 etc
Octal: 021, 077, 033 etc
Hexadecimal: 0x7f, 0x2a, 0x521 etc
```

**2. Floating Point Literals**

A floating-point literal is a numeric literal that has either a fractional form or an exponent form. For example:

`-2.0`

`0.0000234`

`-0.22E-5`

**3. Characters**

A character literal is created by enclosing a single character inside single quotation marks. For example:

`'a'`,`'m'`,`'F'`,`'2'`,`'}'`, etc

**4. String Literals**

A string literal is a sequence of characters enclosed in double-quote marks. For example:

`"good"` => string constant

`""` => null string constant

`" "` => string contant of six white spaces

`"x"` => string constant having a single character

`"Earth is round \n"` => prints string with a newline

<!--
| String                | Description                               |
| --------------------- | ----------------------------------------- |
| `"good"`              | string constant                           |
| `""`                  | null string constant                      |
| `" "`                 | string contant of six white spaces        |
| `"x"`                 | string constant having a single character |
| `"Earth is round \n"` | prints string with a newline              |
-->

**4. C++ Constants**

In C++, we can create variables whose value cannot be changed. For that, we use the `const` keyword. Here's an example:

```cpp
const int LIGHT_SPEED = 299792458;
LIGHT_SPEED = 2500 // Error! LIGHT_SPEED is a constant.
```

Here, we have used the keyword `const` to declare a constant named `LIGHT_SPEED`. If we try to change the value of `LIGHT_SPEED`, we will get an error.

---

## C++ Data Types

In C++, data types are declarations for variables. This determines the type and size of data associated with variables. For example,

```cpp
int age = 13;
```

Here, `age` is a variable of type `int`. Meaning, the variable can only store integers of either 2 or 4 bytes.

### C++ Fundamental Data Types

- `int` : Integer
- `float` : Floating point (decimal)
- `double` : Double Floatin-point
- `char` : Charachter
- `bool` : Boolean
- `void` : Empty

Now, let us discuss these fundamental data types in more detail.

#### 1. C++ int

- The `int` keyword is used to indicate integers
- Its size is usually 4 bytes. Meaning, it can store values from `-2147483648` to `2147483647`
- For Example:

```cpp
int salary = 85000;
```

#### 2. float and double

- float and `double` are used to store floating-point numbers (decimals and exponentials).
- The size of `float` is 4 bytes and the size of `double` is 8 bytes. Hence, `double` has two times the precision of `float`. To learn more, visit C++ float and double.
- For example,

```cpp
float area = 64.74;
double volume = 134.64535;
```

As mentioned above, these two data types are also used for exponentials. For example,

```cpp
double distance = 45E12    // 45E12 is equal to 45*10^12
```

#### 3. C++ char

- Keyword `char` is used for characters.
- Its size is 1 byte.
- Characters in C++ are enclosed inside single quotes `' '`.
- For example,

```cpp
char test = 'h';
```

**Note:** In C++, an integer value is stored in a char variable rather than the character itself. To learn more, visit
[C++ charachters](https://www.programiz.com/cpp-programming/char-type)

#### 5. C++ bool

- The `bool` data type has one of two possible values: `true` or `false`.
- Booleans are used in conditional statements and loops (which we will learn in later chapters).
- For example,

```cpp
bool cond = false;
```

#### C++ void

- The `void` keyword indicates an absence of data. It means "nothing" or "no value".
- We will use void when we learn about functions and pointers.

**Note:** We cannot declare variables of the `void` type.

---

Sourced from **Programiz**
