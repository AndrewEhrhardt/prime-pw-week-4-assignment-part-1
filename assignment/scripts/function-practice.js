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
  return "Hello, " + name + "!"; //Concatenates the functions arguement with Hello and an exclamation point and returns
}
// Remember to call the function to test
console.log(helloName("Andy")) //Calls the function, passes in "Andy" and logs it in the console

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber; //Adds the function's two arguements together and returns
}
console.log(addNumbers(2,3)) //calls and logs result of function when passing through 2 and 3

// 4. Function to multiply three numbers & return the result
function multiplyThree( first, second, third){
  return first * second * third; //Multiplies the function's three arguements together and returns
}
console.log(multiplyThree(2,3,4)) //calls and logs result of function when passing through 2, 3 and 4

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){ //checks if number is greater than zero
    return true; //if so, the function returns true
  }
    return false; //if the return above didn't run and end the function, the number must have been negative so false is returned
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

//I had written the above function to return a string that says 'undefined' if
//the array was empty, however I realized that the function would return
//'undefined' without needing an if else statement. However this 'undefined'
//is technicially not in the form of a string, I think, so I've included my
//original code in case it should be.


let testArray = [1,5,3,6,9,-5,-7,-2];
let testEmpty = [];
console.log("Testing getLast() function, should return -2:", getLast(testArray));
console.log("Testing getLast() function with an empty array, should return undefined:", getLast(testEmpty));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find


function find( value, array ){ //Takes in two arguements, an array and a value that the array will be checked to contain
  let i = 0; //Declared iterative variable within the function to limit scope
  while (i < array.length){  //Continue running code within the while loop while "i" is less than the length of the array
    if (array[i] === value){ //Checks if the "i" index of the array is equal to the value arguement
      return true; //If so, end function and return true
    }
      i++; //If not, increase the value of "i" by one and run while loop again
  } return false; //If no match is found after iterating through the entire array, return false
}

console.log("Testing find() function, should say true: " + find(1, testArray))
console.log("Testing find() function, should say true: " + find(6, testArray))
console.log("Testing find() function, should say false: " + find(10, testArray))
console.log("Testing find() function, should say false: " + find(2, testArray))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) { //Function takes in two arguements, a letter and a string
  return (string.charAt(0) === letter ? true : false); //Ternary operator checks if the first character of the string is the same as the letter arguement,
} //if so, return true, if not, return false

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll( array ) { //function takes in an array as an arguement
  let sum = 0; //sum variable is declared locally to avoid scope issues
  for (let element of array){ //for loop iterates through each element of the array
    sum += element; //each element is added to the sum variable
  }
  return sum; //after the for loop iterates through the entire array, the sum is returned
}
console.log(testArray)
console.log("Summing the array listed above using sumAll() function, should return 10:", sumAll(testArray))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let sumAllPositive = array => { //Arrow function takes in an array as an arguement
  let sum = 0; //Sum variable is declared locally to avoid scope issues
  for (let element of array){ //for loop iterates through the array
    element > 0 ? sum += element : sum += 0; //ternary operator checks if the element of the array is greater than zero,
  }//if so, element is added to sum, if not nothing is added to sum
  return (sum > 0 ? sum : []); //an additional ternary operator checks if sum is greater than zero, if so sum is returned
} //if not an empty array is returned

let negativeTestArray = [-1, -4, 0, -10]


console.log("Testing sumAllPositive() function, should return 24:", sumAllPositive(testArray));
console.log("Testing sumAllPositive() function, should return an empty array:", sumAllPositive(negativeTestArray));

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

//Testing the function with a few different arrays:
console.log("Testing minMax() array, should return [-7, 9]:", minMax(testArray));
console.log("Testing minMax() array, should return [-10, 0]:", minMax(negativeTestArray));
console.log("Testing minMax() array, should return [1, 1]:", minMax([1]));
