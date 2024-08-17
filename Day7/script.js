// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    Title:"Scanner Darkly" ,
    Author: "Philip K. Dick",
    Year: 1977
}

console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(`Title: ${book.Title}`);
console.log(`Author: ${book.Author}`);

// Methods are actions that can be performed on objects.

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function(){
    return `${this.Title} by ${this.Author}`;
};
console.log(book.getDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

// Task 6: Access and log the name of the library and the titles of all the books in the library.

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
