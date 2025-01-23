const name="Tejas"
const repoCount=20
console.log(name+ repoCount+" value");//not good syntax

console.log(`Hello My Self Is ${name} and My Repo Count Is ${repoCount}`);//modern way(follow this syntax properly)

const gameName=new String('TejFx-Marathi')//string declration
console.log(gameName[0]);// access key value pair
console.log(gameName.charAt(3));// access key value pair
console.log(gameName.__proto__);// length of string

console.log(gameName.length);// length of string
console.log(gameName.toUpperCase());// uppercase
console.log(gameName.toLowerCase());// lowercase
console.log(gameName.indexOf('Fx'));// index of string

gameName[0]='f'//not possible

const newString1=gameName.concat('Game')//concatination
const newString=gameName.substring(0,7)//substring(not required negative value)
console.log(newString);

const anotherString=gameName.slice(-2,4)//slice(required also negative value)
console.log(anotherString);

const newStringOne="   tejas   "
console.log(newStringOne.trim());//trim(trim remove the starting and ending space)
console.log(newStringOne);

const url="https://www.tejfx.com/tejas%20marathi"
console.log(url.replace('%20','-'))
console.log(url.replace('https','http'))
console.log(url.replace('tejfx','tejas'))
console.log(url.includes('tejfx'))//true;
console.log(url.includes('hello'))//false;

console.log(gameName.split('-'))//split;(convert into array)




 







