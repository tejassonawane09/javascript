const userEmail='tejas@gmail.com'

if (userEmail ) {
    console.log("Got user email");
    
}else{
    console.log("Dont Have User Email");
    
}


// falsy values
// false value
//false ,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
//"0",'false'," ",[],{},function(){ }

// if(userEmail.length===0){
//     console.log("Array Is Empty");  
// }


// const emptyObj={}

// if(Objest.keys(emptyObj).length===0){
//     console.log("Object is Empty");  
// }

//Nullish Coalescing Operator (??) : null undefined

//let val1;
//val1 =5??10
//val1=null?? 10

//val1 =undefined ?? 45

// val1=null ?? 50 ?? 10
// console.log(val1);



//Terniary operator
//condition ? true :false

const iceTeaPrice=100
iceTeaPrice >= 100 ? console.log("less than 100"): console.log("more than 100")

