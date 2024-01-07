//const tinderUser = new Object()   // singleton Object
const tinderUser = {}  // non-singleton Object


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "risav",
            lastname: "gc"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

//const obj3 = { obj1,obj2}
//console.log(obj3);

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);
const obj3 = {...obj1,...obj2}
console.log(obj3);


const user = [
    { 
        id:1,
        email:"fjdjakl@gmail.com"
    },

    {
        id:1,
        email:"fjdjakl@gmail.com"
    }
] 



console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



