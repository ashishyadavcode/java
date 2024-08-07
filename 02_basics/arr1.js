// array

const myArray = [0, 1 ,2 ,3, 4, 5]

myArray.push(7)  //add the new value at last
myArray.pop()  //remove the last value from arrays
myArray.unshift(9) //add new value at first
myArray.shift() // remove the first value
console.log(myArray.includes(5)); // give true or false if the value exixts in array

console.log(myArray.indexOf(5));  // gives the index of provided value

let newArray = myArray.join(); // converts all values  into string

console.log(newArray);
console.log(typeof newArray);

// sliice & splice

let Heros = ['saktiman', 'thor', 'iron-man' , 'spider-man' , 'hulk'] // original array
console.log('A' , Heros);  //output: A [ 'saktiman', 'thor', 'iron-man', 'spider-man', 'hulk' ]

let Heros1 = Heros.slice(1,3);  // slice from index 1 to 3  note{does't include the range}
console.log(Heros1); // output: [ 'thor', 'iron-man' ]  
console.log('B' , Heros);  //there is nothing change in original array (B [ 'saktiman', 'thor', 'iron-man', 'spider-man', 'hulk' ])


let Heros2 = Heros.splice(1,3);   //splice from index 1 to 3  note{ include the range}
console.log(Heros2);  // output: [ 'thor', 'iron-man', 'spider-man' ] 
console.log('C' , Heros);  // that splice values cuts from original array   output: C [ 'saktiman', 'hulk' ]




