//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        //console.log("5 Is The Best Number");
        }
    //console.log(element);
}//for loop


//console.log(element);//not use because it is not on the loop scope

for (let index = 0; index <= 10; index++) {
    //console.log(`Outer Loop:${index}`);    
   for (let i = 1; i <= 10; i++) {    
    //console.log(`Inner Loop Value:${i} and Inner ${i}`);
    //console.log(i+' * '+i+' = '+index*i);
     }    
}

let myArray=["ironman","Thor","Captain_America"]
//console.log(`Array Length: ${myArray.length}`);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}


//break 

// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log(`Detected 5`);
//         break//its stop the program //exit from the code
        
//     }
//     console.log(`Value Of I Is:${index}`);    
// }



//continue
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`);
        continue //continue its only detect
        
    }
    console.log(`Value Of I Is:${index}`);    
}





