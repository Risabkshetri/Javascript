


function sayMyname(){

console.log("R");
console.log("I");
console.log("S");
console.log("A");
console.log("B");

}

// sayMyname()

// function addTwoNumbers( num1 , num2){
//     console.log(num1 + num2);
//}
function addTwoNumbers( num1 , num2){

    // let result = num1 + num2
    // console.log("risab");
    // return result 
    //onsole.log("risab");  // see
    return num1 + num2

}    

const result =addTwoNumbers(3,4)
// addTwoNumbers(3, 'a')
//addTwoNumbers(3,null)

// const result = addTwoNumbers(3,4)

console.log("result:",result);


function loginUserMessage(username= "sam"){
    if(username === undefined){
    console.log("Please enter your username");
    return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("risab"));
console.log(loginUserMessage());