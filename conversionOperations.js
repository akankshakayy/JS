let value = 30
console.log(typeof value);
console.log(typeof (value));

let value1 = "30"
console.log(typeof value1);
console.log(typeof value1);

let value2 = "30abc" //string value
let val2inNum = Number(value2) // conversion
console.log(val2inNum);  //NaN
console.log(typeof val2inNum); //number 

let bool = true //boolean value
let boolinNum = Number(bool) // conversion
console.log(boolinNum);  //NaN
console.log(typeof boolinNum); //number

console.log(typeof Nan)



//NaN : not a number