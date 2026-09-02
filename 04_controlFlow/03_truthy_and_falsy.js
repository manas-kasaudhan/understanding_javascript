// ==========================================
// JavaScript Truthy & Falsy Values
// ==========================================

// JavaScript mein jab koi value condition ke andar
// use hoti hai, toh JavaScript us value ko
// true ya false ke form mein evaluate karta hai.
//
// Example:
//
// if (value) {
//     // agar value Truthy hai toh ye chalega
// } else {
//     // agar value Falsy hai toh ye chalega
// }


// ==========================================
// TRUTHY VALUES
// ==========================================

// Truthy ka matlab:
// Aisi value jo condition mein TRUE behave karti hai.
//
// Kuch common Truthy values:
//
// true
// "hello"
// "0"
// "false"
// 1
// -1
// []
// {}
// function() {}


// Example:

if ("Hello") {
    console.log("This is Truthy");
}

// Output:
// This is Truthy


// ==========================================
// FALSY VALUES
// ==========================================

// Falsy ka matlab:
// Aisi value jo condition mein FALSE behave karti hai.
//
// JavaScript mein mainly ye values Falsy hain:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//
// Inke alawa almost saari values Truthy hoti hain.


// Example:

if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Output:
// Falsy


// ==========================================
// 1. Boolean
// ==========================================

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("User is logged in.");
} else {
    console.log("User is not logged in.");
}


// ==========================================
// 2. Empty String
// ==========================================

const username = "";

if (username) {
    console.log(`Welcome ${username}`);
} else {
    console.log("Please enter your username.");
}

// Empty string "" → Falsy


// ==========================================
// 3. Non-Empty String
// ==========================================

const name = "Manas";

if (name) {
    console.log(`Hello ${name}`);
} else {
    console.log("Name is empty.");
}

// "Manas" → Truthy


// ==========================================
// IMPORTANT:
// "0" aur "false" Truthy hain
// ==========================================

if ("0") {
    console.log("String 0 is Truthy");
}

if ("false") {
    console.log("String false is Truthy");
}

// Reason:
// Ye dono strings hain aur empty nahi hain.
//
// "0"     → Truthy
// "false" → Truthy


// ==========================================
// 4. Number
// ==========================================

const score = 0;

if (score) {
    console.log("Score exists.");
} else {
    console.log("Score is zero.");
}

// 0 → Falsy


// Lekin:

const marks = 90;

if (marks) {
    console.log("Marks are available.");
}

// 90 → Truthy


// ==========================================
// 5. null
// ==========================================

const user = null;

if (user) {
    console.log("User exists.");
} else {
    console.log("No user found.");
}

// null → Falsy


// ==========================================
// 6. undefined
// ==========================================

let email;

if (email) {
    console.log("Email is available.");
} else {
    console.log("Email is not available.");
}

// undefined → Falsy


// ==========================================
// 7. NaN
// ==========================================

const result = "hello" * 5;

if (result) {
    console.log("Valid result.");
} else {
    console.log("Result is invalid.");
}

// "hello" * 5 → NaN
// NaN → Falsy


// ==========================================
// EMPTY ARRAY AND EMPTY OBJECT
// ==========================================

// IMPORTANT:
// Empty array [] aur empty object {}
// Falsy NAHI hain.
//
// Dono Truthy hain.

const emptyArray = [];

if (emptyArray) {
    console.log("Empty array is Truthy");
}

const emptyObject = {};

if (emptyObject) {
    console.log("Empty object is Truthy");
}

// Output:
// Empty array is Truthy
// Empty object is Truthy


// ==========================================
// Quick Truthy / Falsy Examples
// ==========================================

console.log(Boolean(true));        // true
console.log(Boolean(false));       // false

console.log(Boolean(1));           // true
console.log(Boolean(0));           // false

console.log(Boolean("Hello"));     // true
console.log(Boolean(""));          // false

console.log(Boolean("0"));         // true
console.log(Boolean("false"));     // true

console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false

console.log(Boolean(NaN));         // false

console.log(Boolean([]));          // true
console.log(Boolean({}));          // true


// ==========================================
// Boolean() Function
// ==========================================

// Boolean() kisi bhi value ko explicitly
// true ya false mein convert kar sakta hai.

console.log(Boolean("Manas"));     // true
console.log(Boolean(""));           // false

console.log(Boolean(100));          // true
console.log(Boolean(0));            // false

console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false


// ==========================================
// Practical Example: Login
// ==========================================

const usernameInput = "Manas";

if (usernameInput) {
    console.log("Username entered.");
} else {
    console.log("Username is required.");
}

// Agar usernameInput = ""
// toh else chalega.
//
// Agar usernameInput = "Manas"
// toh if chalega.


// ==========================================
// Practical Example: Shopping Cart
// ==========================================

const cartItems = [];

if (cartItems.length) {
    console.log("Items are available in cart.");
} else {
    console.log("Your cart is empty.");
}

// Yahan directly cartItems check karne par
// [] Truthy hota.
//
// Isliye hum .length check kar rahe hain.
//
// []          → Truthy
// [].length   → 0 → Falsy


// ==========================================
// Practical Example: User Profile
// ==========================================

const profile = {
    name: "Manas",
    age: 22
};

if (profile) {
    console.log("Profile exists.");
} else {
    console.log("Profile not found.");
}


// ==========================================
// Falsy Values: QUICK REVISION
// ==========================================

// JavaScript ke common Falsy values:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//
// Baaki values generally Truthy hoti hain.
//
// Specially yaad rakho:
//
// []     → Truthy
// {}     → Truthy
// "0"    → Truthy
// "false"→ Truthy
// -1     → Truthy


// ==========================================
// PRACTICE QUESTIONS
// ==========================================


// Q1.
// Check karo ki username available hai ya nahi.

const userName = "";

// Expected:
// "Username is required."


// ==========================================

// Q2.
// Check karo ki user logged in hai ya nahi.

const loggedIn = false;

// Expected:
// "Please login first."


// ==========================================

// Q3.
// Check karo ki cart mein items hain ya nahi.

const cart = [];

// Hint:
// cart.length check karo.


// ==========================================

// Q4.
// Batao output kya hoga WITHOUT running the code?

console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(null));


// ==========================================

// Q5. FINAL CHALLENGE
//
// Predict karo kaunsa message print hoga:

const value = "false";

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Answer predict karo bina run kiye.