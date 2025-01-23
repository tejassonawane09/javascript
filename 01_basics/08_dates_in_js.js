//Dates

let myDate=new Date();// its instance of Date object and current date and time
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(typeof myDate);//check the type of date object

//let myCreatedDate=new Date('2020-08-20');//passing date in string format
//let myCreatedDate=new Date(2020,0,20,5,3);
let myCreatedDate=new Date("01-14-2023");
 
console.log(myCreatedDate.toLocaleString());//20/1/2020, 5:03:00 am
console.log(myCreatedDate.toString());//Tue Jan 20 2020 05:03:00 GMT+0530 (India Standard Time)

let myTimeStamp=Date .now()
console.log(myTimeStamp);//return the time stamp in milliseconds
console.log(Date.now()/1000);//return the time stamp in seconds

console.log(Math.floor(Date.now()/1000));//return the time stamp in seconds


let newDate=new Date()//object of date
console.log(newDate);
console.log(newDate.getTime());//return the time in milliseconds
console.log(newDate.getFullYear());//return the year
console.log(newDate.getMonth());//return the month
console.log(newDate.getDate());//return the date

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"Asia/Kolkata"
})






