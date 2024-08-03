// Arithmetic operators 
const a = 6;
const b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Assignment operator

let number = 10;
number += 5;
console.log(number);
number -= 2;
console.log(number); 

// comparision operator

let k = 20;
let j = 9;
let l = '9';


console.log(k > j);
console.log(k < j);

console.log(j <= l);
console.log(j >= k);

// strict equality) checks for both value and type equality
console.log(j === l);
// checks for value equality after performing type coercion if necessary
console.log(j == l);

// Loigical operator
let bool_1 = true;
let bool_2 = false;

console.log(bool_1 && !bool_2);
console.log(bool_1 || bool_2);
console.log(!bool_1);

// Ternary operaotor

let num = 62;
num > 20 ? console.log("number is grreater than 20") : console.log("number is less than 20");
