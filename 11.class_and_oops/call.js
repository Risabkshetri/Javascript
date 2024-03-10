function SetUsername(username) {
    // complex DB calls
    this.username = username;
    // console.log("called")
}

function createUser(username,email,password) {
    SetUsername.call(this,username);
    this.email = email;
    this.password = password;

}

const chai = new createUser("chai","Chia@gmail.com","123");
console.log(chai);