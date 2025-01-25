// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log('DB:CONNECTED');    
})();
//chai()



// ( function TejFx() {
//     console.log('DB:CONNECTED TWO');    
// })()//global variable pollution removed so use the iife


// ( ()=> {
//     console.log('DB:CONNECTED TWO');    
// })()


( (name)=> {
    console.log(`DB:CONNECTED TWO ${name}`);    
})('Tejas')