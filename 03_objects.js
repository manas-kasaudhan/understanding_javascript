// Objects

// object liteals

// singleton --> if we create an object through constructors.

const mySym = Symbol("1234");

const JsUser = {
  name: "Vardaan", //  key - value pair
  age: 24,
  [mySym]: "1234", // for decalring symbols always use square brackets .
  location: "Bengaluru",
  email: "email@codec.com",
  isLoggedIn: false,
  lastLogDays: ["Monday", "Friday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]); // acess values in object.
console.log([mySym]);

JsUser.email = "Manas@gmail.com"; // for changing something in the object .

// Object.freeze(JsUser) // freezes the object , thus no further changes should apply .

JsUser.name = "Manas"; // Yeh CHnge nai hoga kyuki object freeze ho chuka hai ..

console.log(JsUser);

// functions in objects .

JsUser.greeting = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
