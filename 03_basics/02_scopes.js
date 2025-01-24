var c=300

 let a=300

if(true){//block code //scope
    let a=10
    const b=20
   // console.log("INNER:",a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

 //console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username='Tejas'

        function two(){
            const website='Youtube'
            console.log(username);
            
        }
       // console.log(website);
        
        two()
}
//one()


if (true) {
    const username='Tejas'
    if (username==='Tejas') {
        const website=' Youtube'
        console.log(username+website);
        
    }
    //console.log(website);  
}
//console.log(username);//check the scope // not execute


//-------------------Interresting----------------

function  addOne(num){
    return num +1//5+1=6
}
console.log(addOne(5));



const addTwo = function(num){
    return num +2//5+2=7
}
console.log(addTwo(5));





