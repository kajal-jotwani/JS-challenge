//  Task 1 WAP to print numbers from 1 to 100 using a for loop

for (let i = 1; i<=100; i++){
    console.log(i);
}

// Task 2 WAP to print the multiplication table of 5 using for loop
console.log("Table of 5");

for(let j = 1; j <= 12; j++){
    let k = 5 * j;
    console.log(k);
}

// Task 3 WAP to print sum of numbers from 1 to 10 using while loop

let num = 1;
let sum = 0;
while(num <= 10){
    sum = sum + num;
    num++;
}
console.log("sum of first 10 numbers is", sum);

// Task 4 WAp to print numbers from 10 to 1

let numbers = 10;

while(numbers >= 1){
    console.log(numbers);
    numbers--;
}

// Task 5 WAP to print numbers from 1 to 5 using a do..While loop
console.log("Task 5")
let num2 = 1;
do{
    console.log(num2);
    num2++
}while(num2 <= 5);

// Task 6 WAP to calculate the factorial of number using do..ehile loop

let fact = 6;
let product = 1;
do{
    product = product * fact;
    fact--;
}while(fact>1);
console.log("factorial of given number is",product)

// Task 7 WAP yo print a pattern using nested for loop

for( let row=1; row<=5; row++){
    let stars = "";
    for(let col=1; col <= row; col++ ){
       stars += "*";
    }
    console.log(stars);
}

// Task 8 WAP to print numbers from 1 to 10 but skip nujmber 5 using the continue statement
for(let y = 1; y <= 10; y++){
    if(y === 5) continue;
    console.log(y);
}
// Task 9 WAP to print numbers from 1 to 10 but stop the loop when the number is 7 using the break statement
for(let y = 1; y <= 10; y++){
    if(y === 7) break;
    console.log(y);
}