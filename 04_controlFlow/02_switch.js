// ==========================================
// JavaScript Switch Statement
// ==========================================

// Switch ka use tab karte hain jab humein
// ek hi value ko multiple possible values
// ke saath compare karna ho.

// Basic Syntax:
//
// switch (key) {
//     case value:
//         // code
//         break;
//
//     case value:
//         // code
//         break;
//
//     default:
//         // agar koi case match nahi hua
//         break;
// }


// ==========================================
// Example 1: Month Checker
// ==========================================

const month = 3;

switch (month) {

    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid month");
        break;
}


// ==========================================
// How switch works
// ==========================================

// Yahan month ki value 3 hai.
//
// switch(month) → JavaScript month ki value check karega.
//
// case 1 → 3 === 1 ? ❌
// case 2 → 3 === 2 ? ❌
// case 3 → 3 === 3 ? ✅
//
// Isliye "March" print hoga.
//
// break ka kaam hai switch ko wahi stop kar dena.
// Agar break nahi lagaya, toh matching case ke
// baad neeche ke cases bhi execute ho sakte hain.


// ==========================================
// Example 2: Day Checker
// ==========================================

const day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day number");
        break;
}


// ==========================================
// Example 3: String ke saath switch
// ==========================================

const role = "admin";

switch (role) {

    case "admin":
        console.log("You have full access.");
        break;

    case "editor":
        console.log("You can edit content.");
        break;

    case "user":
        console.log("You have limited access.");
        break;

    default:
        console.log("Unknown role.");
        break;
}


// ==========================================
// Important: break ko samjho
// ==========================================

const number = 2;

switch (number) {

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

    default:
        console.log("Something else");
        break;
}

// Output:
// Two


// ==========================================
// What happens without break?
// ==========================================

const value = 2;

switch (value) {

    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

    default:
        console.log("Default");
}

// Output:
// Two
// Three
// Default
//
// Kyunki case 2 match hone ke baad break nahi hai,
// JavaScript neeche ke cases ko bhi execute karta rahega.
//
// Is behaviour ko "fall-through" kehte hain.


// ==========================================
// Multiple cases with same output
// ==========================================

const today = "Saturday";

switch (today) {

    case "Saturday":
    case "Sunday":
        console.log("It's a weekend!");
        break;

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday!");
        break;

    default:
        console.log("Invalid day");
        break;
}


// Yahan Saturday aur Sunday dono ke liye
// same code execute hoga.
//
// Agar today = "Saturday"
// → case "Saturday" match hoga
// → break nahi hai
// → next case "Sunday" par jayega
// → same code execute hoga.


// ==========================================
// Practice Questions
// ==========================================

// Q1. Number ke according month ka naam print karo.
//
// 1 → January
// 2 → February
// 3 → March
// ...
// 12 → December
//
// Agar 1-12 ke alawa koi value ho,
// "Invalid month" print karo.


const monthNumber = 8;

// Apna code yahan likho.



// ==========================================

// Q2. Calculator banao.
//
// "+" → Addition
// "-" → Subtraction
// "*" → Multiplication
// "/" → Division


const num1 = 20;
const num2 = 5;
const operator = "*";

// Expected Output:
// 100


// ==========================================

// Q3. Traffic Light
//
// "red"    → Stop
// "yellow" → Get Ready
// "green"  → Go
// Anything else → Invalid signal


const signal = "green";

// Apna code yahan likho.