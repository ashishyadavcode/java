let Marvel_heros = ['thor','ironman','spiderman'];
let dc_heros = ['superman','flash','batman'];

// Marvel_heros.push(dc_heros);
// console.log(Marvel_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]     
// console.log(Marvel_heros[3][1]);  //flash  {not a good formate}



// 1. USE OF (CONCAT)
let allHeros = Marvel_heros.concat(dc_heros);   //(concat returns a new array)
console.log(allHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]      



//2. Use of (...)
let newHeros = [...Marvel_heros, ...dc_heros]   //output will same as concat but mostly people uses it
console.log(newHeros);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]     


// USE OF (FLAT)   -add all array ,sub-array value into one
let number = [1,2,3, [3,4] ,5 ,[6,7,[7,8]]];
let another_array = number.flat(Infinity);
console.log(another_array);


// USE OF (FORM)  -convert any string in array by form
console.log(Array.isArray("ashish"));  //false
console.log(Array.from("ashish"));  //[ 'a', 's', 'h', 'i', 's', 'h' ]



// USE OF (OF)  - returns a set of all elements
let score1 = 100;
let scrore2 = 200;
let scrore3 = 300;
console.log(Array.of(score1,scrore2,scrore3));   //[ 100, 200, 300 ]
