const marvel_heros = ["thor","ironman","spiderman"]

const dc_heroes = ["superman","batman","flash"]

marvel_heros.push(dc_heroes)

console.log(marvel_heros.push(dc_heroes))   //4


console.log(marvel_heros)   //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

//array can can take any data array can also take another data as element 


console.log (marvel_heros[3][1])  //batman

const allHeroes = marvel_heros.concat(dc_heroes)

console.log(marvel_heros) 

console.log(allHeroes)  //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//---------------SPREAD-------------

//spread ==> glass break it got spread 

const allNewHeroes = [...marvel_heros,...dc_heroes]

console.log (allNewHeroes) //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//------------------------------------------------------------------------

const anotherArray=[1, 2, 3, [ 4, 5, 6 ] , 7, [ 6, 7, [4, 5 ]]]

const useable_Another_Array = anotherArray.flat(Infinity)

 console.log(useable_Another_Array)   //
 // [1, 2, 3, 4, 5,
//  6, 7, 6, 7, 4,
 // 5]

//--------------------------------------------------

console.log(Array.isArray("Akansha"))    //false
console.log(Array.from("Akansha"))       //[
 // 'A', 'k', 'a',
//  'n', 's', 'h',
//  'a']


console.log(Array.from({name :"Akansha"}))  //      []   //it will not understand weather we have to make a array using keys or values 

let score1 = 100;
let score2 = 200;
;let score3 = 300;

console.log (Array.of (score1,score2,score3))   
  // returns a new array from set of element 
  // [100,200,300]