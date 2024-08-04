// Task 1 -> to check +ve -ve 0 in a given number

let num = 9;
if (num == 0){
    console.log("number is zero")
}
else if (num > 0){
    console.log("number is Positive")
}
else{
    console.log("number is Negative")
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 20;

if(age >= 18){
    console.log("you are eligable to vote")
}
else{
    console.log("you are not eligable to vote")
}

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 6;
let b = 8;
let c = 3;

if(a > b){
    if(a > c){
        console.log("a is largest")
    }
    else{
        console.log("c is greatest")
    }
}
else {
    if(b > c){
        console.log("b is largest")
    }
    else{
        console.log("c is greatest")
    }
}

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 4;

switch(dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
            console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
     default:
            console.log("Invalid day number");   
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let grade = 80;

switch(true) {

    case grade >= 90:
        console.log("Grade : A");
        break;
    case grade >= 80:
        console.log("Grade : B");
        break;
     case grade >= 70:
        console.log("Grade : C");
        break;
    case grade >= 60:
        console.log("Grade : D");
        break;
    default:
        console.log("Grade : F")

}
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let numToCheck = 7;

let result = (numToCheck % 2 === 0) ? "The number is even." : "Number is odd"
console.log(result);

// Task 7: Write a program to check if a year is a leap year using multiple conditions and log the result to the console.
let year = 2000;

if(year % 4 === 0 && year % 100 !== 0)
    console.log(year, "it's a leap year");
else{
    console.log(year, "it's not a leap year")
}
