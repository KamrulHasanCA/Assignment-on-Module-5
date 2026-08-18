// Task 1 : Variables & Constants

let myName = "Kamrul Hasan";
let myAge = 18;
let favoriteColor = "Black";

const country = "Bangladesh";

    console.log("Name:", myName);
    console.log("Age:", myAge);
    console.log("Favorite Color:", favoriteColor);
    console.log("Country:", country);


    // ============================================================================

// Task 2: Data Types

let studentName = "Kamrul";  //strings
let rollNumber = 18;            //Number
let isStudent = true;       //boolean
let course = ["DNS", "Javasript", "OOP"];  //array
let student = {name: "Kamrul", age: 18, student: true }; //object

    console.log(studentName, typeof studentName);
    console.log(rollNumber, typeof rollNumber);
    console.log(isStudent, typeof isStudent);
    console.log(course, typeof course);
    console.log(student, typeof student);



    // ============================================================================


    // Task 3 : Operators

let a = 20;
let b = 5;

console.log(a + b); //additon
console.log(a - b); //substract
console.log(a * b); //multiply
console.log(a / b); //division
console.log(a % b); //reminder


// ============================================================================
  
//Task 4: Condition (if...else)
    
let numbers = 45;

    if (numbers >= 50) {
    console.log("Pass");
}
    else {
        console.log("Fail");
    }


    // ============================================================================
    
    
// Task 5 : switch-case

let day = 3;

switch (day) {
    case 1: 
    console.log("Monday");
    break;
    
    case 2: 
    console.log("Tuesday");
    break;

    case 3: 
    console.log("Wednesday");
    break;
    
    case 4: 
    console.log("Thursday");
    break;

    case 5: 
    console.log("Friday");
    break;

    case 6: 
    console.log("Saturday");
    break;
    
    case 7: 
    console.log("Sunday");
    break;

    default: 
    console.log("Invalid Day");
}


// ============================================================================


// Task 6: for Loop


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ============================================================================

// Task 7: while Loop

let i = 10;
while ( i >= 1) {
    console.log(i);
    i--;
}

// ============================================================================


// Task 8: Array + for...of

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let item of fruits) {
    console.log(item);
}

//Task 9: Object + for...in

let person = {
name: "Rahim",
age: 22,
city: "Dhaka"
}

for (let key in person) {
    console.log(key, person[key]);
}


// ============================================================================

// Task 10: Comments

 //This is single line comments go with line input 

  
  /*  This is a multi line comment.
   It can span several lines.
   The code here does not run.
  */


// ============================================================================

// Task 11: Function (Arguments)

function greet(name) {
    console.log("Hello", name);
}

greet("Rahim");

// ============================================================================

// Task 12: Returning Value

function sum (x , y) {
    return x + y;
}

console.log(sum(10, 5));


// ============================================================================

