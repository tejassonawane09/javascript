// console.log("T");
// console.log("E");
// console.log("J");
// console.log("A");
// console.log("S");



// function : function this is keyword to declared any function

//Example:
function sayMyName(){
    console.log("T");
    console.log("E");
    console.log("J");
    console.log("A");
    console.log("S");
}


// sayMyName()//execution //reference  

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(30,40)//pass the arguments on the function // add both numbers
// addTwoNumbers(30,"40")//js assume the its string
// addTwoNumbers(30,"e")//js assume the its string
// addTwoNumbers(30,null)

//when call the functions that values are arguments 
//when give the value in function that are parameters

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result//when return take in program that means its end of that specific task
    // console.log("Tejas");//its not execute because return keyword in upper line

    return number1+number2
    
}

const result =addTwoNumbers(30,40)
//console.log("Result:",result);


function loginUserMessage(username="Tej"){
    if (!username){
        console.log('Please Enter A UserName');
        //return 
        
    }
    return`${username} Just Logged In`//functions return value
}

console.log(loginUserMessage('Tejas'));//print the function
console.log(loginUserMessage());//when value is not defined that means its undefined




