const marvel_heros=['thor','ironman','spiderman']
const dc_heros=['batman','superman','flash']



// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//marvel_heros.push(dc_heros)

//const allHeros=marvel_heros.concat(dc_heros)//concat is use for the connecting strings
//console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros]
//console.log(all_new_heros); 

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Tejas"));//false
console.log(Array.from("Tejas"));//this makes the direct new from Tejas
console.log(Array.from({name:"Tejas"}))//not convert


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));





















