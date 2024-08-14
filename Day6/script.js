// Task 1: create an array of nubers from 1 to 5 and log the array to the console
const array = [1,2,3,4,5];
console.log(array);

// Task 2: Access the first and last element of the array
const firstElement = array[0];
const lastElement = array[array.length -1];
console.log(`first element: `, firstElement);
console.log(`last element: `, lastElement);

// Task 3: use push method to add a new number to the end of the array and log the updated array.
array.push(6);
console.log(`after push`,array);

// Task 4: use pop method to remove the last element of the array and log the updated array.
array.pop(6);
console.log(`after pop`,array);

// Task 5: use shift method to remove the last element of the array and log the updated array.
array.shift();
console.log(`after shift`,array);

// Task 6: use unshift method to add a new number to the begining of the array and log the updated array.
array.unshift(1);
console.log(`after shift`,array);

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const newArray = array.map(item => item*2);
console.log(`arrays of doubled numbers is: `, newArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const arr = array.filter(item => item%2 == 0);
console.log(`arrays of even numbers is: `, arr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum =  array.reduce((total, num) => total + num, 0);
console.log(`arrays of sum of elements is: `, sum);

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
array.forEach(element => {
    console.log(element)
});

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[1][2]; // Accessing element 6
console.log(`Specific element: ${specificElement}`);