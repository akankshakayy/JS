//console.log(2+2);
console.log(120 / 5 ** 2); //4.8 here power is given priority **
console.log(true); // true
console.log(+true);// 1
//console.log(true + ); //error
console.log(+""); // 0
//console.log(""+); // error

console.log("1"+ 2); // 12
console.log(1 + "2"); //12
console.log("1" + 2 +1); // 121 
console.log(1 + 1  + "2") // 22



//prefix and postfix
let x1 = 3n;
const y1 = ++x1;
// x1 is 4n; y1 is 4n
console.log(typeof x1);//bigInt

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
console.log(typeof x2);//bigInt