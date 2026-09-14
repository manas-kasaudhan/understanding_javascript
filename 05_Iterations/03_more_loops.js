// ==========================================
// JavaScript: for...of Loop & Map
// ==========================================

// ------------------------------------------
// 1. for...of with Array
// ------------------------------------------

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// ------------------------------------------
// 2. for...of with String
// ------------------------------------------

const name = "Manas";

for (const character of name) {
  console.log(character);
}

// ------------------------------------------
// 3. for...of with Numbers
// ------------------------------------------

const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
  console.log(number);
}

// ------------------------------------------
// 4. for...of with Set
// ------------------------------------------

const uniqueNumbers = new Set([10, 20, 20, 30, 40]);

for (const number of uniqueNumbers) {
  console.log(number);
}

// ------------------------------------------
// 5. Creating a Map
// ------------------------------------------

const student = new Map();

student.set("name", "Manas");
student.set("age", 22);
student.set("course", "MCA");

console.log(student);

// ------------------------------------------
// 6. Getting Values from Map
// ------------------------------------------

console.log(student.get("name"));
console.log(student.get("course"));

// ------------------------------------------
// 7. Checking a Key
// ------------------------------------------

console.log(student.has("age"));
console.log(student.has("city"));

// ------------------------------------------
// 8. Deleting a Key
// ------------------------------------------

student.delete("age");

console.log(student);

// ------------------------------------------
// 9. for...of with Map
// ------------------------------------------

const user = new Map([
  ["name", "Manas"],
  ["age", 22],
  ["city", "Meerut"],
]);

for (const [key, value] of user) {
  console.log(`${key}: ${value}`);
}

// ------------------------------------------
// 10. Getting Only Keys
// ------------------------------------------

for (const key of user.keys()) {
  console.log(key);
}

// ------------------------------------------
// 11. Getting Only Values
// ------------------------------------------

for (const value of user.values()) {
  console.log(value);
}

// ------------------------------------------
// 12. Practical Example
// ------------------------------------------

const marks = new Map([
  ["JavaScript", 85],
  ["Java", 78],
  ["Python", 90],
  ["HTML", 95],
]);

for (const [subject, mark] of marks) {
  console.log(`${subject}: ${mark}`);
}
