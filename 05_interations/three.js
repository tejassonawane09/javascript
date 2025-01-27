// for of loop
// syntax
// for (const element of object) {
    
// }
const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

const greetings ='Hello World!'
for (const greet of greetings) {
    //console.log(`Each Char Is ${greet}`);
    
}



//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
//console.log(map);


for (const [key,value]  of map) {
  //console.log(`Values Of Map:${key}`);
  console.log(key,':-',value);
  
}



const myObject={
  'game1':'NFS',
  'game2':'BGMI'
}

// for (const [key,value] of myObject) {
//   console.log(key,':-',value);
// }

