// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "risab",
    "FullName": "risab gc",
    //mySym: "mykey1",
    [mySym]: "mykey1",     
    age: 18,
    location: "Faridabad",
    userEmail: "risab@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","saturday"]

    
}

console.log(JsUser.userEmail);
console.log(JsUser["userEmail"]);
console.log(JsUser["FullName"]);
console.log(JsUser[mySym]);   // interesting
console.log(typeof(JsUser[mySym]));

JsUser.userEmail = "risab@chatgpt.com"
//Object.freeze(JsUser)
JsUser.userEmail = "risab@microsoft.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingtwo =function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());