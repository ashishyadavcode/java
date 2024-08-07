// dates 

let myDate = new Date()
console.log(myDate.toDateString()); //Wed Aug 07 2024

console.log(myDate.toISOString());  //2024-08-07T09:35:03.505Z

console.log(myDate.toString());  //Wed Aug 07 2024 15:05:32 GMT+0530 (India Standard Time)

console.log(myDate.toTimeString());  //15:06:12 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleDateString());  //7/8/2024

console.log(typeof myDate);  //object

let newdate = new Date(2023 ,0, 15); // here 0 means january
console.log(newdate.toDateString());


console.log(myDate.getMonth() + 1);  // 8 (august)
