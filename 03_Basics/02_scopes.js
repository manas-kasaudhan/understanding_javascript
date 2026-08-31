{
} // scope

let a = 300; // global scope --> accepeted by whole program

if (true) {
  // block scope --> scope inside a loop , conditional etc.
  let a = 10;
  const b = 20;
  //console.log("Inner: ", a);
}

console.log(a); // output will be 300 because the variable a comes from a global scope .
// console.log(b);


// ********** NESTED SCOPE ************* // 

function one(){
    const username = "Manas"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}
one()

// method two can take input from method one , but not vice versa .

if(true){
    const username = "Vardaan"
    if(username === "Vardaan"){
        const website = " youtube"
        console.log(username  +  website);
        
    } 
    //console.log(website);
    
}
//console.log(username);


//++++++++++++INTERESTING++++++++++++++++
console.log(addOne(5));

function addOne (num){
    return num + 1
}


console.log(addTwo(6)); // it will throw and error , because it has a variable in it thats why it cannot execute it before declaration .

const addTwo = function(num){
    return num + 2
}
