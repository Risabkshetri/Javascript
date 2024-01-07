function calculateCartprice(val1, val2, ...num1){   // rest operator(...a)
    return num1
}

console.log(calculateCartprice(200,400,500,3000));

const user = {
    username: "risab",
    price: 199
}   
    function handleobject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }

//handleobject(user)

handleobject({
    username: "sam",
    price:399


})


const myNewArr = [200,300,400.500]
function reuturnSecondvalue(getArr){
    return getArr[1]
}

console.log(reuturnSecondvalue(myNewArr));