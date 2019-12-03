---
title: "JavaScript Hoisting"
date: "2019-12-03"
description: Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope  
category: JavaScript
---

Hoisting is JavaScript's default behavior of **moving declarations to the top of the current scope** (ie: the top of the current script or the current function). 

In JavaScript, a variable can be declared after it has been used. In other words; **a variable can be used before it has been declared**.
```
x = 5; // Assign 5 to x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element
var x; // Declare x
```
Variables and constants declared with **let or const are not hoisted**!

JavaScript only hoists declarations, not initializations.
```
var x = 5; // Initialize x
var y = 7; // Initialize y
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
```
Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript. If a developer doesn't understand hoisting, programs may contain bugs (errors). **To avoid bugs, always declare all variables at the beginning of every scope**. Since this is how JavaScript interprets the code, it is always a good rule. JavaScript in [strict mode](https://www.w3schools.com/js/js_strict.asp) does not allow variables to be used if they are not declared.

Hoisting applies to variable declarations and to function declarations. Because of this, **JavaScript functions can be called before they are declared**:
```
myFunction(5);

function myFunction(y) {
  return y * y;
}
```
Functions defined using an expression are not hoisted.


