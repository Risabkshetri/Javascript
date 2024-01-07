// if

// if (condition){

// }
//  // eg
//  if (true){

//  }

// < , > , <=, >=, ==, !=, ===, !==


const temperature = 41

if (temperature < 50){
    console.log(`temperature is less than 50`);
}

else{
console.log(`temperature is greate than 50`);
}
const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`);  // Scope


const balance = 1000

//if (balance > 500) console.log("test1"),console.log(`test2`);

if (balance < 500){
    console.log(`${balance} is less than 500`);

}
else if ( balance < 750){
    console.log(`${balance} is less than 750`);
}

else {
console.log(`${balance} is less than 2000`);
}

const userLoggedIn = true
const debitCatd = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCatd){
    console.log(`User is allowed to buy course`);
}

if ( loggedInFromGoogle || loggedInFromEmail){
    console.log(`user logged in`);
}