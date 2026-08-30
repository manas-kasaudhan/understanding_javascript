function sayMyName() {
  // creation of a function
  console.log("V");
  console.log("A");
  console.log("R");
  console.log("D");
  console.log("A");
  console.log("A");
  console.log("N");
}

sayMyName(); // executing of function

function addTwoNumbers(number1, number2) {
  //console.log( number1 + number2);
}
addTwoNumbers(2, 6);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in.`;
}
// console.log(loginUserMessage("Vardaan"))
// console.log(loginUserMessage()) // if no value is passed , it just returns undefined .

function calculateCartPrice(...cart1) {
  // rest opreator collects all the values and stores in an Array .
  return cart1;
}
// console.log(calculateCartPrice(345,765,243,900));

// Functions in Objects

const user = {
  username: "Manas",
  price: 299,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

// handleObject(user)

// Function in arrays

const myNewArray = [200, 400, 100, 6000];

function returnSecondValue(getArray) {
  return getArray[3];
}
console.log(returnSecondValue(myNewArray));
