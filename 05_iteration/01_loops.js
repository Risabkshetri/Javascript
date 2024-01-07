// for loop

for(let i=0; i<10; i++){
    const elenemt = i;
    //console.log(elenemt);

    if (elenemt == 5){
        //console.log(`5 is best number`);
    }

}

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value : ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        //console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArr = ["flash","batman","superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}


// break and continue

for (let i = 1; i <= 20; i++) {

    ;
    if(i== 5){
        //console.log(`Detected 5`);
        break;
    }
    //console.log(`the number: ${i}`)
}

for (let i = 1; i <= 20; i++) {

    
    if(i== 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`the number: ${i}`);
}
