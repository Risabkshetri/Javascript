const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter)
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    Name: 'ginger chai',
    price: 230,
    isAvailable: true,
    oderChai: function (){
        console.log("chai nhi bni");
    }
    
}

console.log(Object.getOwnPropertyDescriptor(chai,"Name"));

Object.defineProperty(chai,"Name",{
    writable: false,
    enumerable: false,
    configurable: false,
    value: 'Risab'
});

console.log(Object.getOwnPropertyDescriptor(chai,"Name"));

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== "function"){
      console.log(key, ':-',value);  
    }
    
    
}