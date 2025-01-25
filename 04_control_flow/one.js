//if

// const isUserLoggedIn=true
// if(2=="2"){
//     console.log("Executed");
// }


// const temperature=41
// if(temperature > 50){
//     console.log("Greater Than 50");
// }else{
//     console.log("Less Than 50");
// }



// const score= 200
// if(score > 100){
//     const power="fly";//in the scope value
//     console.log(`User Power:${power}`);
// }


//short hand notation
// const balance=100
// if (balance<500) console.log("Test");//implicit scope


// const balance=1000
// if (balance<500) {
//     console.log("Less Than 500");
// }else if (balance<750) {
//     console.log("Less Than 750");
// }else if(balance<900){
//     console.log("Less Than 900");   
// }else{
//     console.log("Less Than 1200");
// }


const userLoggedIn=true
const debitCard=true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true
if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow To Buy Course");
} else {
    console.log("Not Allow Course");
}

if (LoggedInFromGoogle|| LoggedInFromEmail) {
    console.log("User Logged In");
}