const name = "manas";
const repoCount = 50;

// console.log(name + repoCount + "value" );

console.log(
  `Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`,
);

const gameName = new String("Manas");

console.log(typeof gameName); // considering new string as an object and has a key-value pair in it .

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);

// we can also use many functions on strings

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf("M"));

const newStirng = "     vardaan     ";

console.log(newStirng);

console.log(newStirng.trim()); // removes extra spaces from the String
