# JavaScript Basics ⚡

A hands-on collection of JavaScript fundamentals, built while learning and strengthening the core concepts of JavaScript.

This folder contains small, focused programs that explore how JavaScript handles **variables, data types, type conversion, comparisons, memory, strings, numbers, and mathematical operations**.

The goal is simple: **understand the language by writing and experimenting with code.**

---

## 📚 What I'm Learning

| #  | Topic                        | File                            |
| -- | ---------------------------- | ------------------------------- |
| 01 | Variables                    | `01_variables.js`               |
| 02 | Data Types                   | `02_dataTypes.js`               |
| 03 | Type Conversion & Operations | `03_conversionandOpreations.js` |
| 04 | Comparisons                  | `04_comparison.js`              |
| 05 | Data Types Summary           | `05_data_types_summary.js`      |
| 06 | Memory & References          | `06_Memory.js`                  |
| 07 | Strings                      | `07_Strings.js`                 |
| 08 | Numbers & Math               | `08_num_and_maths.js`           |

---

## 🧠 Concepts Covered

### Variables

Understanding how JavaScript stores values using:

* `let`
* `const`
* `var`

```javascript
let username = "Manas";
const age = 21;
```

---

### Data Types

Exploring JavaScript's primitive and non-primitive data types.

```javascript
String
Number
Boolean
Undefined
Null
Symbol
BigInt
Object
```

---

### Type Conversion

Learning how JavaScript converts values between different data types.

```javascript
let score = "100";

let convertedScore = Number(score);

console.log(convertedScore);
```

Topics include:

* String → Number
* Number → String
* Boolean conversion
* Truthy and falsy values
* Unexpected conversion behavior

---

### Operators & Comparisons

Understanding how JavaScript evaluates expressions.

```javascript
10 + 5
10 - 5
10 * 5
10 / 5
10 % 3
```

And comparisons such as:

```javascript
5 == "5"
5 === "5"
5 != "5"
5 !== "5"
```

A major focus is understanding the difference between **loose equality (`==`) and strict equality (`===`)**.

---

### Memory & References

Exploring how JavaScript handles values in memory, including the difference between:

* Primitive values
* Reference values
* Stack
* Heap
* Copying values
* Referencing objects

This helps build a foundation for understanding JavaScript behavior beyond simple syntax.

---

### Strings

Working with strings and common string operations.

```javascript
const name = "Manas";

console.log(name.length);
console.log(name.toUpperCase());
```

Topics include:

* String declaration
* String methods
* Template literals
* String interpolation
* Accessing characters
* Common string operations

---

### Numbers & Math

Working with numbers and JavaScript's built-in `Math` object.

```javascript
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
```

Topics include:

* Numbers
* Floating-point values
* `Math` methods
* Rounding
* Random numbers
* Basic mathematical operations

---

## 📁 Folder Structure

```text
01_Basics/
│
├── 01_variables.js
├── 02_dataTypes.js
├── 03_conversionandOpreations.js
├── 04_comparison.js
├── 05_data_types_summary.js
├── 06_Memory.js
├── 07_Strings.js
└── 08_num_and_maths.js
```

---

## ▶️ Running the Code

Make sure **Node.js** is installed.

Clone the repository:

```bash
git clone https://github.com/manas-kasaudhan/understanding_javascript.git
```

Move into the basics folder:

```bash
cd understanding_javascript/01_Basics
```

Run any JavaScript file:

```bash
node 01_variables.js
```

For example:

```bash
node 07_Strings.js
```

---

## 🎯 Learning Approach

This repository is being built as a **learning-by-doing** project.

Instead of only reading JavaScript concepts, I am:

1. Learning a concept
2. Writing small examples
3. Running the code
4. Experimenting with different values
5. Observing JavaScript's behavior
6. Moving toward more advanced concepts

The idea is to gradually move from **syntax → fundamentals → problem solving → DOM → asynchronous JavaScript → advanced concepts**.

---

## 🛠️ Tech Stack

* **JavaScript**
* **Node.js**
* **VS Code**
* **Git & GitHub**

---

## 🚧 Progress

```text
JavaScript Fundamentals

Variables             ██████████  100%
Data Types            ██████████  100%
Type Conversion       ██████████  100%
Operators              ██████████  100%
Comparisons            ██████████  100%
Memory                 ██████████  100%
Strings                ██████████  100%
Numbers & Math         ██████████  100%

Next → Control Flow → Functions → Arrays → Objects → DOM → Async JS
```

---

## 🌱 Why This Repository Exists

This isn't meant to be a collection of copied snippets.

It is a record of my **JavaScript learning journey**, where each file represents a concept I explored and practiced.

As I progress, this repository will grow from basic JavaScript syntax into more practical and advanced concepts used in modern web development.

---

## 👨‍💻 Author

**Manas Kasaudhan**

MCA Student | Aspiring Full Stack Web Developer

GitHub: [@manas-kasaudhan](https://github.com/manas-kasaudhan)

---

> **Learn it. Write it. Break it. Understand it. Build with it.**
