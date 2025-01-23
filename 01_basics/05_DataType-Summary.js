 // Primitive Datatype(call by value)
      // 7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber=43245654n




//Reference Datatype(call by reference)//Non-primitive
  //Array,Objects,functions

const heros=["shakiman","naagraj","doga"]
let myObj={
    name:"Tejas",
    age:20
}

const myfunction= function (){
    console.log("Hello")
}

console.log(typeof bigNumber);


//==========================================================

// Stack(primitive) ,Heap(Non-primitive)

//stack
let myForex="TejFx"

let anotherName=myForex
anotherName="TejasForex"
console.log(anotherName);
console.log(myForex);


let userOne={
    email:"user@google.com",
    upi:"user@okhdfcbank"
}

let userTwo=userOne

userTwo.email="tejas@.com"
console.log(userOne.email);
console.log(userTwo.email); 




