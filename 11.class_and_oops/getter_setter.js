
// function based
class User {
    constructor (email,password){
        this.email = email;
        this.password = password;

    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}

const risab = new User("rieasfA@gh.com","fioe123");
console.log(risab.password);

// pproperty based
Object.defineProperty(this,"email",{
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(){
        this._email = value;
    }

})

const chai = new User("chai@gan.com","chai");
console.log(chai);

// Object based

const User = {
    _email: 'hwe@email.com',
    _password: 'djfj23e3',
    
    get email(){
        return this._email.toUpperCase();

    },
    set email(value){
        return this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email);