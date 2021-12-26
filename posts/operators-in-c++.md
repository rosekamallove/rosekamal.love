---
title: "Operators  and Comments in C++"
date: "2021-12-23"
---

Operators are symbols that perform operations on variables and values. For example, `+` is an operator used for addition, while `-` is an operator used for subtraction.

Operators in C++ can be classified into 6 types:

1. Arithematic Operators
2. Assignment Operators
3. Relational Operators
4. Logical Operators
5. Bitwise Operator
6. Other Operators

---

## 1. C++ Arithematic Operator

Arithmetic operators are used to perform arithmetic operations on variables and data. For example,

```
a + b;
```

Here, the `+` operator is used to add two variables `a` and `b`. Similarly there are various other arithmetic operators in C++.

`+` : Addition  
 `-`: Subtraction  
 `*`: Multiplication  
 `/`: Division  
 `%`: Modulo Operation (Remainder after division)

### Example:

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    a = 7;
    b = 2;

    // printing the sum of a and b
    cout << "a + b = " << (a + b) << endl;

    // printing the difference of a and b
    cout << "a - b = " << (a - b) << endl;

    // printing the product of a and b
    cout << "a * b = " << (a * b) << endl;

    // printing the division of a by b
    cout << "a / b = " << (a / b) << endl;

    // printing the modulo of a by b
    cout << "a % b = " << (a % b) << endl;

    return 0;
}
```

**Output**

```
a + b = 9
a - b = 5
a * b = 14
a / b = 3
a % b = 1
```

#### (/) Division Operator

Note the operation `(a / b)` in our program. The `/` operator is the division operator.

As we can see from the above example, if an integer is divided by another integer, we will get the quotient. However, if either divisor or dividend is a floating-point number, we will get the result in decimals.

```
In C++,

7/2 is 3
7.0 / 2 is 3.5
7 / 2.0 is 3.5
7.0 / 2.0 is 3.5
```

#### (%) Modulo Operator

The modulo operator `%` computes the remainder. When `a = 9` is divided by `b = 4`, the remainder is **1**.

> **Note:** The `%` operator can only be used with integers.
