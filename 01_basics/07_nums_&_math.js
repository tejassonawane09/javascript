const score=400
console.log(score);


const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)//check the length
console.log(balance.toFixed(2))//precision value its for ex:100.00


const otherNumber=123.54
console.log(otherNumber.toPrecision(3));//op:124

const hun=1000000
console.log(hun.toLocaleString('en-IN')); //op:10,00,000


//----------Maths-------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));//op:5
console.log(Math.ceil(4.1));//op:5
console.log(Math.floor(4.9));//op:4
console.log(Math.min(1,2,3,4,5));//op:1
console.log(Math.max(1,2,3,4,5));//op:5
console.log(Math.pow(2,3));//op:8
console.log(Math.sqrt(9));//op:3
console.log(Math.random());//op:0.12345678 value always between 0 to 1

console.log(Math.random()*10+1);//op:4.618692944860036
console.log(Math.floor(Math.random()*10+1));//op:4

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min)+min));//op:15










