// ==========================================
// JavaScript If-Else Practice
// ==========================================

// 1. Basic if statement
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}


// 2. if-else statement
let temperature = 35;

if (temperature > 30) {
    console.log("It's a hot day.");
} else {
    console.log("The weather is pleasant.");
}


// 3. if-else if-else
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// 4. Checking even or odd
let number = 17;

if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}


// 5. Login check
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login successful.");
} else {
    console.log("Invalid username or password.");
}


// 6. Multiple conditions
let userAge = 22;
let hasLicense = true;

if (userAge >= 18 && hasLicense) {
    console.log("You can drive.");
} else {
    console.log("You cannot drive.");
}


// 7. OR operator
let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday.");
}


// 8. Nested if-else
let balance = 5000;
let withdrawal = 3000;

if (withdrawal <= balance) {

    if (withdrawal > 0) {
        console.log("Withdrawal successful.");
        console.log(`Remaining balance: ${balance - withdrawal}`);
    } else {
        console.log("Invalid withdrawal amount.");
    }

} else {
    console.log("Insufficient balance.");
}


// 9. Truthy and falsy values
let usernameInput = "";

if (usernameInput) {
    console.log("Username entered.");
} else {
    console.log("Please enter your username.");
}


// 10. Ternary operator
let loggedIn = true;

loggedIn
    ? console.log("Welcome back!")
    : console.log("Please log in.");


// ==========================================
// Practice Questions
// ==========================================

// Q1. Check whether a number is positive, negative, or zero.

let num = -10;

// Write your code here



// Q2. Check whether a person is eligible to vote.

let personAge = 17;

// Write your code here



// Q3. Check whether a number is divisible by both 3 and 5.

let value = 30;

// Write your code here



// Q4. Find the greater of two numbers.

let a = 25;
let b = 40;

// Write your code here



// Q5. Create a simple electricity bill system.
//
// Units <= 100       → ₹5 per unit
// Units 101 - 200    → ₹7 per unit
// Units > 200        → ₹10 per unit

let units = 250;

// Write your code here



// Q6. Check login credentials.
//
// username = "admin"
// password = "1234"

let loginUsername = "admin";
let loginPassword = "1234";

// Write your code here



// Q7. Create a simple age category:
//
// 0-12   → Child
// 13-19  → Teenager
// 20-59  → Adult
// 60+    → Senior Citizen

let currentAge = 21;

// Write your code here



// Q8. Check whether a year is a leap year.
//
// Hint:
// A year is a leap year if:
// - divisible by 400
// OR
// - divisible by 4 but NOT divisible by 100

let year = 2028;

// Write your code here