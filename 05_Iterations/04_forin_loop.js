// ==========================================
// JavaScript: for...in Loop
// ==========================================


// ------------------------------------------
// 1. for...in with Object
// ------------------------------------------

const student = {
    name: "Manas",
    age: 22,
    course: "MCA"
};

for (const key in student) {
    console.log(key);
}


// ------------------------------------------
// 2. Getting Key and Value
// ------------------------------------------

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}


// ------------------------------------------
// 3. for...in with Array
// ------------------------------------------

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (const index in fruits) {
    console.log(index);
}


// ------------------------------------------
// 4. Getting Array Values
// ------------------------------------------

for (const index in fruits) {
    console.log(fruits[index]);
}


// ------------------------------------------
// 5. Practical Example
// ------------------------------------------

const marks = {
    JavaScript: 85,
    Java: 78,
    Python: 90,
    HTML: 95
};

for (const subject in marks) {
    console.log(`${subject}: ${marks[subject]}`);
}


// ------------------------------------------
// 6. for...in with Nested Object
// ------------------------------------------

const user = {
    name: "Manas",
    details: {
        age: 22,
        city: "Meerut"
    }
};

for (const key in user.details) {
    console.log(`${key}: ${user.details[key]}`);
}


// ------------------------------------------
// 7. for...in with Object.hasOwn()
// ------------------------------------------

const person = {
    name: "Manas",
    age: 22
};

for (const key in person) {
    if (Object.hasOwn(person, key)) {
        console.log(`${key}: ${person[key]}`);
    }
}