const tinderUser = {
    name: "ashish",
    id: "123",
    isLoggedIn: false
};

let regularUser = {
    name: "ram",
    email: {
        firstemail: "ram@.com",
        secemail: "ram@gmail.com"
    }
};
// console.log(regularUser);

const obj1 = {1: "a",2:"b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({},obj1 , obj2); // combine or merge two objects

const obj3= {...obj1,...obj2} // second method to combine
// console.log(obj3);


console.log(tinderUser);
console.log(Object.keys(tinderUser)); //to know keys from large data 
console.log(Object.values(tinderUser)); // to knwo the values of an obj 
console.log(Object.entries(tinderUser)); //to know key,value at same time

console.log(tinderUser.hasOwnProperty("is"));

