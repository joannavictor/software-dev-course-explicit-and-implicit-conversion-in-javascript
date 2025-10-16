/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
The result is: 3
This is valid!
Total Age: 255
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.
1. Explicit conversion of "5" would be the right way.
2. Boolean("false") is true because non-empty strings are truthy. 
3. String concatenation happens when one operand is a string.  

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);


let isValid = "false";

if (isValid === "true") {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!");
}


let age = "25";                          
let totalAge = Number(age) + 5;          
console.log("Total Age: " + totalAge); 


// Part 2: Write Your Own Examples

// Implicit Type Conversion Example
let implicitExample = "10" * 2; // The string "10" is implicitly converted to the number 10
console.log("Implicit Conversion Result: " + implicitExample); // Outputs: 20

// Explicit Type Conversion Example
let explicitExample = "20"; // This is a string
let convertedNumber = Number(explicitExample); // Explicitly converting the string to a number
console.log("Explicit Conversion Result: " + (convertedNumber + 5)); // Outputs: 25

// Edge Case Example with NaN
let edgeCase = "abc"; // This is a non-numeric string
let nanResult = Number(edgeCase); // Converting to number results in NaN
console.log("Edge Case Result (NaN): " + nanResult); // Outputs: NaN

let undefinedExample; // This is undefined
let undefinedToString = String(undefinedExample); // Explicitly converting undefined to string
console.log("Undefined to String Result: " + undefinedToString); // Outputs: "undefined"

let nullExample = null; // This is null
let nullToBoolean = Boolean(nullExample); // Explicitly converting null to boolean
console.log("Null to Boolean Result: " + nullToBoolean); // Outputs: false


