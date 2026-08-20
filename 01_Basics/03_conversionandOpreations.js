let score = "33abc";

console.log(typeof score);

let valueInNumber = Number(score); // converison of string to number
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN not a number

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1;

let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

// "" => false
// "Manas" => true
// true => 1 ; false => 0

let number = 33 

let stringNumber = String(number)
console.log(stringNumber)
console.log(typeof stringNumber)

// ******************* Opreations ********************//

let value = 3 
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Manas"

let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // gives output 122
console.log(1 + 2 + "2"); // gives output 32  because of conversion

let gameCounter = 100 ;
++ gameCounter; // pre adds 1 to the original value then prints it
console.log(gameCounter)
gameCounter++;
console.log(gameCounter) // adds 1 to the current value and store it 




