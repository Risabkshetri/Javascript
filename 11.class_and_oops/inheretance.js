class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(this.username);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;

    }

    addCouser(){
        console.log(`A new course is added by ${this.username}`);
    }

}

const chai = new Teacher("chai","fjsa@teacher.com","123");
chai.addCouser()

const masalaChai = new User(`masala`)
// masalaChai.addCouser()
masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai instanceof User)
