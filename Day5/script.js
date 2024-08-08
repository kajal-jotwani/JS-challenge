// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkOddEven(number){
    if (number % 2 === 0){
        console.log("Number is Even");
    }
    else{
        console.log("Number is Odd");
    }
}
// Example usage
checkOddEven(49);
checkOddEven(40);

// Task 2: Write a programe to find square of a number and return the result
function square(number){
   return number * number;
}
// Example usage
console.log(square(5));

// Task 3: Write a function expression to find the maximum of two number and log the result to the console
const findMax = function (a, b){
    const max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
}
// Example usage
findMax(10,23);

//Task 4: Write a function expression to concatinate teo strings and return result
const concatString = function(str1 , str2){
    return str1 +" "+ str2;
}
// Example usage
console.log(concatString("kajal", "jotwani"));
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (a, b) => a + b ;
// Example usage
console.log(calculateSum(20, 84));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsChar = (str, char) => str.includes(char);
// Example usage
console.log(containsChar("hello", "h"));

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(a, b=1){
    return a * b ;
}
// Example usage
console.log(product(4, 7));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function person(name, age = 18){
    return `Hello, ${name}! you are ${age} years old`;
}
// 
// Example usage
console.log(person("kajal", 19));

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3); // Example usage

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunction(func1, func2, val){
    return func2(func1(val));
}

const addThree = num => num + 3;
const multiplyByTwo = num => num * 2;

console.log(applyFunction(addThree, multiplyByTwo, 23));