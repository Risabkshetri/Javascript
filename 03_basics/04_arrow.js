const user = {
    username: "risav",
    price: 99,
    wellcomeMessage: function(){
        console.log(`${this.username}, wellcome to website`);
    }

}

// user.wellcomeMessage()
// user.username = "sam"
// user.wellcomeMessage()


//function chai (){
    //let username = "risab"
    //console.log(this.username);
    //console.log(this);
//}

//chai()

const chai = function(){
    let username = "risab"
    console.log(this.username);
}

//chai()


// Arrow Function

// const addTwo = (num1,num2) => {
//     return num1 + num1
// }

// console.log(addTwo(3,4));

//@ another way

//const addTwo = (num1,num2) => (num1 + num1)
const addTwo = (num1,num2) => ({username: "risab"})


console.log(addTwo(3,4));


