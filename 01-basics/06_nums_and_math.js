const score =400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.4422
console.log(otherNumber.toPrecision(3));

const hudreds = 200000
console.log(hudreds.toLocaleString('en-IN'));


// *********** Maths ************ //

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,3,3,4,5,6));
// console.log(Math.max(4,3,4,6,8,8,9));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 30

console.log(Math.random()*(max - min +1));
console.log(Math.floor(Math.random()*(max - min +1)) + min);    // #


