//const tinderUser=new Object()//object declaration//this is singleton object

const tinderUser={}//this also object declaration // this is not ingleton object

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false


//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        usersFullname:{//in this case object in object
            firstName:"Tejas",
            lastName:"Sonawane"
        }
    }
}
//value always access using dot(.) notation
//console.log(regularUser.fullname?.usersFullname);

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}
const obj4= {5:"a",6:"b"}
//const obj3={obj1,obj2}//combines array in this case

//assign : its use for the assign the value
//const obj3= Object.assign({},obj1,obj2,obj4)//combine objects 

const obj3={...obj1,...obj2}//use spread //simple syntax //use 90%
//console.log(obj3);//combine gets prints on it


const users=[
    {
        id:1,
        email:'tejas@gamail.com'
    },
    {
        id:1,
        email:'tejas@gmail.com'
    }
]
users[1].emaillog
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//use for keys 
// console.log(Object.values(tinderUser));//use for keys values
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true






//Object de-structure:

const course={
    courseName:'js',
    price:'1000',
    courseInstructor:'Tejas'
}

//course.courseInstructor//use the values

const {courseInstructor:instructor}=course
console.log(instructor);
//console.log(courseInstructor);//easy to access



// const navbar=({company})=>{

// }

// navbar(company='Tejas') 





//   {
//      name:'Tejas',
//      courseName:'js',
//      price:'free'
//   }

[
    {},
    {},
    {}
]

