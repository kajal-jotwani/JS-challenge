// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "kajal";
let age = 19;
console.log(`Name: ${name}, Age: ${age}`);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `This is a multi-line string.
It spans multiple lines.
Using template literals makes it easy.`;
console.log(multiLineString);

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10,20,30,40,50];
const [first, second] = numbers;
console.log(first,second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960 
};

const {title, author} = book;
console.log(`Title: ${title}, Author: ${author}`);

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newArray = [...numbers,60,70,80];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1,2,3,4,5));

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const multiply = (a, b = 1) => a * b;
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const createPerson = (name, age) => {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
};
const person = createPerson("Alice", 30);
console.log(person);
person.greet(); 

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "favoriteColor";
const color = "blue";
const obj = {
    [propName]: color
};
console.log(obj);