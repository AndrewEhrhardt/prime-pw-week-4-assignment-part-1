console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log(helloName("Andy"))

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(2,3))

// 4. Function to multiply three numbers & return the result
function multiplyThree( first, second, third){
  return first * second * third;
}
console.log(multiplyThree(2,3,4))

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}


// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
//  if (array.length === 0) {
//    return 'undefined';
//  } else {
    return array[array.length-1];
//  }
}

//I had written the above function to return a string that says 'undefined',
//however I realized that the function would return 'undefined' without needing
//an if else statement. However this 'undefined' is technicially not in the form
//of a string, I think, so I've uncluded my original code in case it should be.


let testArray = [1,5,3,6,9,-5,-7,-2];
let testEmpty = [];
console.log(getLast(testArray));
console.log(getLast(testEmpty));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let i = 0;

function find( value, array ){
  while (i < array.length){
    if (array[i] === value){
      return true;
    } else {
      i++;
    }
  } return false;
}

console.log("This should say true: " + find(1, testArray))
console.log("This should say true: " + find(6, testArray))
console.log("This should say false: " + find(10, testArray))
console.log("This should say false: " + find(2, testArray))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return (string.charAt(0) === letter ? true : false);
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll( array ) {
  let sum = 0;
  for (let index of array){
    sum += index;
  }
  return sum;
}
console.log(testArray)
console.log(sumAll(testArray))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let sumAllPositive = array => {
  let sum = 0;
  for (let index of array){
    index > 0 ? sum += index : sum += 0;
  }
  return (sum > 0 ? sum : [])
}

let negativeTestArray = [-1, -4, 0, -10]


console.log(sumAllPositive(testArray))
console.log(sumAllPositive(negativeTestArray))

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Challenge on edabit states:
//Create a function that takes an array of numbers and return both the
//minimum and maximum numbers, in that order.

function minMax(array){
  let min = array[0]; //Assigning min to first element so function can compare it to something, additionally
  let max = array[0]; //these two lines allow the function to still work with an array with one value
  for (index of array){ //for loop to iterate through the array so each element can be compared
    if (index >= max){ //check if element is greater than or equal to the max value
      max = index; //if so, assign it to the max value
    } else if (index <= min){ //check if the element is less than or equal the min value
      min = index; //if so, assign it to the min value
    }
  } return [min, max]; //return the min, then the max value after the array has been looped through
}

//testing the function with a few different arrays:
console.log(minMax(testArray))
console.log(minMax(negativeTestArray))
console.log(minMax([1]))
