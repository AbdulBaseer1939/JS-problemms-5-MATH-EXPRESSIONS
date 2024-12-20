// Problem: Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a = window.prompt("enter 1st number");
var b = window.prompt("enter 2nd number");

var sum = parseInt(a) + parseInt(b);
document.write("The sum of " + a + " and " + b + " is: " + sum);

// Problem: Repeat task1 for subtraction, multiplication, division & modulus. 

// todo: for Subtraction

var subtractionResult = parseInt(a) - parseInt(b);
document.write("<br>The subtraction of " + a + " and " + b + " is: " + subtractionResult);

// todo: for multiplication

var multiplicationResult = parseInt(a) * parseInt(b);
document.write("<br>The multiplication of " + a + " and " + b + " is: " + multiplicationResult);

// todo: for division

var divisionResult = parseInt(a) / parseInt(b);
document.write("<br>The division of " + a + " and " + b + " is: " + divisionResult);

// todo: for modulus

var modulusResult = parseInt(a) % parseInt(b);
document.write("<br>The modulus of " + a + " and " + b + " is: " + modulusResult);


