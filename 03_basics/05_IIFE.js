// Immediately Invoked Function Expression(IIFE)

(function chai(){
    console.log("DB CONNECTED");
})();


(
    (name) =>{
        console.log((`DB is connected ${name}`))
    }
)('risab');