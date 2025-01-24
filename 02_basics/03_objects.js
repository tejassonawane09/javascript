//singleton

//objects Literals


//how to declared Symbol:
const mySym=Symbol("Key1")//Symbol 

//Object.create //contructar method makes objects
const JsUser={
    name:"Tejas",
    "Full Name":"Tejas Sonawane",//this value does not access with dot(.)
    [mySym]:"myKey1",//accesing any value from symbol so use the square breackets like this:[]
    age:20,
    location:"Nashik",
    email:"tejas@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}//objects

//how to access objects:
JsUser.email//that process is access the objects

console.log(JsUser.email);//access email 
console.log(JsUser["email"]);//access email 
console.log(JsUser["Full Name"]);//access name in  (["  "])
console.log(JsUser[mySym]);//symbol accesing 


//objects value is accesing useing the dot(.) notation

JsUser.email="tejas31@gmail.com"// equal (=) use for value override
//Object.freeze(JsUser)//JsuSer does not propogate // freeze is use for does not chnage again

JsUser.email="tejfx@gmail.com"
console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS User ,${this.name}`);//useing backticks [``]
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());










