const marvelHeros = ["thor", "spiderman" ,"deadpool"]
const dcHeros = ["batman" ,"wonderwoman" , "homelander"]

//marvelHeros.push(dcHeroes) // add hte dc heroes insid ethe marvel heros array

// console.log(marvelHeros);

const superHeros = marvelHeros.concat(dcHeros)  // adds both array into one and form a new array .

console.log(superHeros);

const allSuperHeros = [...marvelHeros, ...dcHeros] // spread opreator --> spreading all the values individually .

console.log(allSuperHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const anotherUsefulArray  =  anotherArray.flat(Infinity) // combines all the nested arras into a complete single array.

console.log(anotherUsefulArray);


console.log(Array.isArray("VARDAAN")) // cheks whether an elements is array or not .

console.log(Array.from("VARDAAN")) // converts any dataype to an array .

console.log(Array.from({name: "Manas"})); // interesting 

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3)); // converts integers into arrays .



