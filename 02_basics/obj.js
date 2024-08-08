// singleton

// object literals

const JSuser = {
    name: "ashish",
    "full Name": "ashish yadav",
    age: 17,
    location: "mathura",
    email: "ashish@gmail.com",
    isloggedIn: false,
    lostloginDays: ['monday','saturday']
}

// console.log(JSuser);
// console.log(JSuser.age);
// console.log(JSuser["full Name"]);




JSuser.email = 'ashishchatgpt.com'
// Object.freeze(JSuser)  // to freeze anyones value so that no one can change in that value
JSuser.email = "ahsishmicro.com"
console.log(JSuser.email);

JSuser.greeting = function(){
    console.log(`hello js user, ${this.name}`);
}

JSuser.greetingtwo = function(){
    console.log("hello js user");
}

console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());
