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

// Problem: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 

var celsiusTemperature = 25;
var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
document.write("25C is " + fahrenheitTemperature + "F<br>");

var fahrenheitTemperature = 77;

var celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;

document.write("77F is " + celsiusTemperature + "C");

// Problem:  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables;
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser.

var item1Price = 50;
var item2Price = 100;
var item1Quantity = 2;
var item2Quantity = 1;
var shippingCharges = 10;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

document.write("<h1>Shopping Cart Receipt</h1>");

document.write("<p>Item 1: " + item1Quantity + " x $" + item1Price + " = $" + (item1Quantity * item1Price) + "</p>");

document.write("<p>Item 2: " + item2Quantity + " x $" + item2Price + " = $" + (item2Quantity * item2Price) + "</p>");

document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");

document.write("<p>Total Cost: $" + totalCost + "</p>");

// Problem: Write a script to display multiplication table of any number in your browser. E.g "Table of 4"
var number = 4;

for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " * " + i + " = " + result + "<br>");
}

// Problem: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
var totalMarks = 100;
var marksObtained = 80;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Toatl Marks:" ,totalMarks+ "<br>Obtained Marks: ", marksObtained + "<br> Percentage: " + percentage + "%");

// Problem: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee).
var usDoller = 10, saudiRiyal = 25;
var totalInPakRupees = (usDoller * 104.80) + (saudiRiyal * 28);

document.write("<br>Total in Pakistani Rupees: " + totalInPakRupees);

// problem:  Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression.

var variable = 10;
var result = (variable + 5) * 10 / 2;

document.write("Result: " + result);

// Problem: The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 

var currentYear = 2022;
var birthYear = 1997;

var age1 = currentYear - birthYear;
var age2 = currentYear - (birthYear + 1);

document.write("<br>They are either " + age1 + " or " + age2 + " years old.");

// Problem:  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// ! (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. 
// ! (Hint: Area of a circle = π r2, π = 3.142)

var radius = 5;

var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

document.write("<br>The circumference is " + circumference.toFixed(2) + "<br>The area is " + area.toFixed(2));
