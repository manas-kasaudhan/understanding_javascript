// For Loop in JavaScript
// A for loop is used to repeat a block of code multiple times.

// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code to execute
// }

// Example 1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Example 2: Print even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}


// Example 3: Calculate the sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);


// Example 4: Loop through an array

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}


// Example 5: Reverse loop

for (let i = 10; i >= 1; i--) {
    console.log(i);
}