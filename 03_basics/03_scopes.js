// let a = 10
// const b = 20
// var c = 30

//var c = 300
//let c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30 // c = 30
    console.log("Inner:",a);
}

//console.log(a);
//console.log(b);
console.log(c);    // #

// Nested Scope

function one(){
    const username = "risab"
    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    //console.log(website);

    two()
}

one()

if (true){
    const username ="risav"
    if (username === "risav"){
        const website = "youtube"
        console.log(username + website);
        console.log(website);
    }
    //console.log(website);
    console.log(username);
}

//console.log(username);


// ++++++++ Interestimg ++++++++++ //

addone(5)   // not error

function addone(num){
    return num + 1
    

}

console.log(addone(5));

//addtwo(5)   // error 

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(22))
