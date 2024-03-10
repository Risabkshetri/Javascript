class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    createId(){
        return '123'
    }
}

const risav = new User("risab") 
console.log(risav.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email=email;
}
}

const iphone = new Teacher("iphone","iphone@games.google.com")
console.log(iphone.logMe());    