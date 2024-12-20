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

// Problem: Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”.

var variable = 5;
document.write("Value after variable declaration is: " + variable + "<br>");

variable = 5;
document.write("Initial value: " + variable + "<br>");

variable++;
document.write("Value after increment is: " + variable + "<br>");

variable += 7;
document.write("Value after addition is: " + variable + "<br>");

variable--;
document.write("Value after decrement is: " + variable + "<br>");

var remainder = variable % 3;
document.write("The remainder is: " + remainder);

// problem: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;

var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to movie is: " + totalCost + "PKR" + "<br>");

// Problem: Write a script to display multiplication table of any number in your browser. E.g "Table of 4"
var number = 4;

for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " * " + i + " = " + result + "<br>");
}
   

