const bumble = new Object() // this is an object

const  bumbleUser = {} // this is also an object .

 bumbleUser.id = "123xyz"
 bumbleUser.name = "Asaram"
 bumbleUser.isLoggedIn = false

 const regularUser = { // nesting in objects 
    email : "hello@gamil.com",
    fullname : {
        userFullName :{
            firstName : "Vardaan",
            lastName : "Qureshi"
        }
    }
 }

 const obj1 = {1:"a" , 2 : "b"}
 const obj2 = {3:"c" , 4 : "d"}

 // const obj3 = Object.assign({},obj1 , obj2) // for combining objects , using of parenthesis defines the empty or initial state .

const obj3 = {... obj1, ...obj2} // suing spread opreator as discussed in arrays .

 console.log(obj3);
 
 