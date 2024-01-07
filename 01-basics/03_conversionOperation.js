let score = 33 // 33 => 33
//let score = "33" // "33" => 33
//let score ="33abc"  // => NaN
//let score = undefined  //=> NaN
//let score = null  //=> 0
//let score = true // => 1 if false => 0
//let score = "risab" // => NaN

//const {score} =req.body // haven't any garentee of dataType of score

console.log(typeof score);
// or
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1
//let isLoggedIn = "Risab"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "Risab"=>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
//*************** Operations ***********

let value = 3
let negValue = -value
//console.log(negValue);
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2**3);
//console.log(2/2);
//console.log(2%2);

let str1 = "hello"
let str2 = "Risab"
let str3 = str1+str2
console.log(str3);
 
//console.log("1"+2);
//console.log(1+"2");
//console.log("1"+2+2);
//console.log(1+2+"3");

//console.log( (3+4)*5%3);

//console.log(+true);  
//console.log(+"");
/* Operational pririority and clean and readability */

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter = 100
// ++gameCounter;
gameCounter++;
console.log(gameCounter);
