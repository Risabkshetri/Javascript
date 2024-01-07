const myNums = [1,2,3,4,5]

// const mytotal = myNums.reduce(function(acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)

//const mytotal = myNums.reduce((acc,curval) => acc + curval,0)

//console.log(mytotal);

const shopingCart= [
    {
    itemName: "python course",
    price: 999
    },
    {
    itemName: "mobile dev course",
    price: 2999
    },
    {
    itemName: "data science course",
    price: 12999,
    }
]

const total = shopingCart.reduce((acc,course) => acc + course.price,0)
console.log(`prece to pay is ${total}`);