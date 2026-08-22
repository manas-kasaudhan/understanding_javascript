//  Stack Memory (Primitive) , Heap (Non-Primitve)

// Stack Memory provides copy the the original value.

// Heap Memory provide the original value changes .

let myYouTubeName = "KasaudhanManas" 

let anotherName = myYouTubeName 

anotherName = "ManasKdotcom"

console.log(anotherName); // the real value doesnot changes because it does the chsnges in the copy of the originsl data .

let user1 = {
    email : "Manas@email.com" ,
    upi : "user@icicicbank"

}

let user2 = user1

user2.email = "manaskasaudhan@gmaiil.com"

console.log(user1);
console.log(user2);  // values in both objects chnaged because the value which the heapmemory stores is the original value .

