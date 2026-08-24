// Array  --> Resizable in JavaScript  , Can have mixed data types

 const myArr = [0,1,2,3,4,5]

//  console.log(myArr[3]); // we can acess the values by using square brackets [] .

 const myHeros = ["Deadpoool" ,"Doctor Strange" ,"Shang Chi"]

 const newArr = new Array (1,2,3,4,5,6) // ways for decalring an array in JavaScript

// console.log(newArr[1]);

// Arrays Methods

myArr.push(6) // adds a new elemnt at the end of an array .

myArr.pop() // removs the last element from the array .

myArr.unshift(9) // add new element at the begining of the array .

myArr.shift() // removes the first element from the array .

// console.log(myArr.includes(9)); // checks whether an array contans the specific element .

// console.log(myArr.indexOf(10)); // shows the position of the element in the array , if element is not present it retrns -1

const arr = myArr.join() // joins two arrays

// console.log(myArr);

// console.log(typeof arr); // array's data type converted into string.

// console.log(arr);


// console.log(myArr);


// slice , splice


console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // slices the elements from the initial value to the final -1 value 

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // removes the range of elements from the array

console.log("C ", myArr);

console.log(myn2);



