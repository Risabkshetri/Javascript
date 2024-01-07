// # Primitive

// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
console.log(userEmail);
 
const id =Symbol("123")
const anotherId = Symbol('23')

console.log(id === anotherId);

const bigNumber = 49939494384n

// # Non primitive(Reference)

// Array,Object,Functions

const heros = ["Shaktiman","naagraj","doga"]

let myObj = {
    name : "Risaab",
    age : 18,
}

const myFunction = function(){

    console.log("Hello World")

}


/* *********** Memory ***********/

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName ="risabgcdotcom"
 
let anotherName = myYoutubeName;

anotherName = "chaiaurcode"
 
console.log(myYoutubeName);
console.log(anothername);

let user1 = {
    email: "user2@gmail.com",
    upi: 294894,
}

let user2 = user1
user2.email = "risab@gmail.com"
console.log(user1.email);
console.log(user2.email);