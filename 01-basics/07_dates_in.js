 // Dates

 let myDate = new Date()
 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toISOString());
 console.log(myDate.toJSON());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toTimeString());
 console.log(myDate.toUTCString());

 console.log(typeof myDate);

 //let myCreatedDate = new Date(2024,0,5)
 //console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-12-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth("01"));
console.log(newDate.getDay());