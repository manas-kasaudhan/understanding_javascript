// Immediately Invoked Function Expression --> IIFE

// to write an iife we use 2 parenthesis for the function , one for its declaration and one for execution . 

//  to stop the execution off an iife we must put a semicolon ; at the end of the iife

(function chai() { // named iife
  console.log("DB CONNECTED");
})();


(() => { // unnamed iife
    console.log("DB CONNECTED 2")
}) ();