// Dates --> OBJECT

let myDate = new Date();
console.log(myDate); // prints date but not in a pure readble form eg --> 2026-08-23T10:16:28.092Z

console.log(myDate.toString()); // converts the date object into a readble string . eg --> Sun Aug 23 2026 15:46:28 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // converts to date string --> Sun Aug 23 2026

console.log(myDate.toLocaleString()); // prints date but in a different format --> 8/23/2026, 3:48:00 PM

let myCreatedDate = new Date(2026, 7, 18); // format is (YYYY , MM , DAY) month starts from 0

let myCreatedDateIN = new Date("08-18-2004"); // for indian standards .

console.log(myCreatedDate.toDateString());
console.log(myCreatedDateIN.toDateString());

let myTimeStamp = Date.now(); // gives the date value in miliseconds

let myTimeStampSeconds = Date.now(); // gives the date value in miliseconds

console.log(myTimeStamp);

console.log(Math.floor(myTimeStampSeconds) / 1000); // convert the date from milliseconds to seconds .

// More methods for dates ..

let newDate = new Date();

console.log(newDate);

console.log(newDate.getDate());

console.log(newDate.getDay());

console.log(newDate.getMonth());

console.log(newDate.getFullYear());
