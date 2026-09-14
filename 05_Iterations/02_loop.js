// ========================================
// WHILE AND DO-WHILE LOOPS
// ========================================

// ----------------------------------------
// 1. WHILE LOOP
// ----------------------------------------

// A while loop checks the condition first.
// If the condition is true, the code runs.

console.log("While Loop:");

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// ----------------------------------------
// 2. DO-WHILE LOOP
// ----------------------------------------

// A do-while loop executes the code first
// and checks the condition afterward.

console.log("\nDo-While Loop:");

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);

// ----------------------------------------
// 3. MAIN DIFFERENCE
// ----------------------------------------

console.log("\nDifference:");

let a = 10;

// While loop
// Condition is false, so it will not execute.
while (a < 5) {
  console.log("While loop executed");
}

// Do-while loop
// Code executes once before checking the condition.
let b = 10;

do {
  console.log("Do-while loop executed once");
} while (b < 5);

// ----------------------------------------
// 4. EVEN NUMBERS USING WHILE LOOP
// ----------------------------------------

console.log("\nEven Numbers using While Loop:");

let num = 2;

while (num <= 10) {
  console.log(num);
  num += 2;
}

// ----------------------------------------
// 5. ODD NUMBERS USING DO-WHILE LOOP
// ----------------------------------------

console.log("\nOdd Numbers using Do-While Loop:");

let odd = 1;

do {
  console.log(odd);
  odd += 2;
} while (odd <= 9);
