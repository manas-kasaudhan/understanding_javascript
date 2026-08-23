// Primitive --> Call by Value

//  7  types : String , Number , Boolean , Temp  ,Null , Undefined , Symbol , BigInt

const score = 100;
const scoreflaot = 100.3;
const isloggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("1234");
const anotherid = Symbol("1234");

console.log(id === anotherid); // both are not same because each symbol has its unique value and data type .

const bigNumber = 567767656443343747646754768755765765768559n;

// console.log(typeof bigNumber);

// JavaScript is Dynamically typed language

// Refrences (Non - Primitve)

// Arraysa , Objects , Functions

const heros = ["shaktimaan", "naagraj", "deadpool"]; // Array

let myObj = {
  // Object
  name: "Manas",
  age: 24,
};

const myFunction = function () {
  // Function
  console.log(typeof bigNumber);
};

myFunction();
