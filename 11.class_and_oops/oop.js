const user = {
    username: "risav",
    loginCount: 10,
    signedIn: true,
    getUserDetails: function(){
        // console.log(`Got user details from database`);
        //console.log(`username: ${this.username}`);
        console.log(this);
    }
    
}

// console.log(user.username)
// //console.log(user.getUserDetails())
// console.log(this)


// constructor function // very important

function User(username, password,islogedIn) {
    this.username = username;
    this.password = password;
    this.islogedIn = islogedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    };
    return this;
}

const userOne = new User("risav",32445454,true);
const userTwo = new User("Bishal",32355454,true);

console.log(userOne.constructor); 
console.log(userTwo);
