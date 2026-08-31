const user = {
  username: "Manas",
  price: 999,

  welcomeMessage: function () {
    console.log(`Hello ${this.username} , Welcome to the website `); // this is used to extract / refer the current context .
  },
  // this only works in an object only , in functions it throws and undefined behavior .
};
// console.log(this); // it alone shows an empty object .

// user.welcomeMessage()
// user.username = "Vardaan"
// user.welcomeMessage() // the current context changed , thus it prints hello vardaan instead of Manas .

// function chai(){
//     console.log(this); // if we run this inside an empty function it shows various values such as global values ,  queueMicrotask etc.

// }
// chai()

// const chai = () =>{ // arrow function
//  let username = "Manas"
//  console.log(this.username); // still shows undefined
// }
// chai()

const chai = () => {
  // arrow function
  let username = "Manas";
  console.log(this); //  shows empty object .
};
chai();

// const addTwo = (num1,num2) => { // A Basic arrow function
//     return num1 + num2  // explicit return
// }

const addTwo = (num1, num2) => num1 + num2; // implicit return , should be in one line .
const add2 = (num1, num2) => num1 + num2; // if we use curly braces , we should write return , otherwise no need

//  const add3 = (num1 ,num2) => {(username: "Qureshi")} // to return an object it must have parenthesis with it

console.log(addTwo(56, 87));
console.log(add3());
