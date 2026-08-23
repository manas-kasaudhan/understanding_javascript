// const score = 100
// console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // converts it to the decimal system .

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3)); // returns the value as a string , the precison value counts the value from most left side .

const hundreds = 100000;

console.log(hundreds.toLocaleString("en-IN")); // converts it into indian standards system , by deafult its international system .

// *********************************MATHS***************************** //

console.log(Math);
console.log(Math.abs(-4)); // absolute value : converts negative values to positive values

console.log(Math.round(4.5)); // rounds off the value to its nearest tens .

console.log(Math.floor(4.5)); // rounds off to the lowest value .

console.log(Math.ceil(4.5)); // rounds off to the highest value .

console.log(Math.random()); // alwys gives a value between 0 and 1 .

console.log(Math.random() * 10 + 1);
