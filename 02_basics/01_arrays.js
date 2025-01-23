//Arrays:

const myArr=[0,1,2,78,4,90]//arrays declaration
const myHeros=['ironman','captain']

const myArr2=new Array(1,2,3,4)//array declared

//console.log(myArr[4]);//values accesing

//Array Methods:

// myArr.push(6)//push is add for the value in array like add
// myArr.push(7)//push is add for the value in array like add
// myArr.pop()// its delete the last value of array


//myArr.unshift(89)//its insert the value in array starting
//myArr.shift()//its remove the first element of the array

//console.log(myArr.includes(5));//op:true
//console.log(myArr.indexOf(3));//op:-1

const newArr=myArr.join()

//console.log(newArr);//op:0,1,2,78,4,90
//console.log(typeof newArr);//check the type of array

//console.log(myArr);




//slice or splice
console.log("A ",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);


const myn2=myArr.splice(1,3)
console.log("C ",myArr);

console.log(myn2);






