const user={
    username:'Tejas',
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }


}

//  user.welcomeMessage()
//  user.username='Tej'
//  user.welcomeMessage()
// //console.log(this);

// function chai(){

//     let user='hitesh'
//     console.log(this.username);
    
// }
// chai()



const chai=  ()=>{  // => this symbol use for the arrows
    let username='Tejas'
    console.log(this);
    
}
chai()


//() => {}// syntax of arrow function

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log('Addition:',addTwo(60,20));


// const addTwo=(num1,num2)=> num1+num2 //implicit
// console.log('Addition:',addTwo(60,20));


// const addTwo=(num1,num2)=> (num1+num2) //if wrap in {} so need return keyword //use the () brackets
// console.log('Addition:',addTwo(60,20));

 const addTwo=(num1,num2)=> ({username:'Tejas'})//in this case if not use () parenthesis so they give error
 console.log('Addition:',addTwo(60,20));


 const myArray=[6,4,8,3,9]
 





