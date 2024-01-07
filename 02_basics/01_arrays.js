// Arrays

const myArray = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArray2 = new Array(1,2,3,4)
console.log(myArray[1]);

// Array methods

myArray.push(6)
myArray.push(7)
console.log(myArray);

myArray.pop()
myArray.pop()

console.log(myArray);

myArray.unshift(0)
myArray.unshift(9)
console.log(myArray);

myArray.shift(0)
myArray.shift(9)
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

const newArr = myArray.join()

console.log(myArray);
console.log(newArr);
console.log(typeof newArr);   // #

// slice, spice

console.log("A",myArray);
const myArray1 = myArray.slice(1,3)

console.log(myArray1);
console.log("B",myArray);

const myArr2 = myArray.splice(1,3)
console.log( "C",myArray);
console.log(myArr2);