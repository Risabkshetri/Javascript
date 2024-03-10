const accountId =122345
let accountEmail = "giaalka23@gmail.com"
var accoutnPassword = "23445"
accoutCity = "Delli"

//accooutId=2 // not allowed

accountEmail ="eowo@gmail.com"
accountPassword ="foiew123"
accountCity ="bangaluru"
let accountState;
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope.

*/

console.table([accountId,accountEmail,accoutnPassword,accountCity,accountState])

const errorMsg = "the 0 is not even"
for(let num = 2;num<5;num++){
    console.log(`the number is ${num}`)
    console.assert(num % 2==0,"%o",{num,errorMsg})
}
