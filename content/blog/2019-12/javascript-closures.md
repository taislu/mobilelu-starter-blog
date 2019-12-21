---
title: "JavaScript Closures"
date: "2019-12-03"
description: JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures.    
category: JavaScript
---

[Source]( https://www.w3schools.com/js/js_function_closures.asp )

JavaScript variables can belong to the local or global scope. **Global variables can be made local (private) with closures**.

A function can access all variables defined inside the function, like this:
```js
function myFunction() {
  var a = 4;
  return a * a;
}
```
But a function can also access variables defined outside the function, like this:
```
var a = 4;
function myFunction() {
  return a * a;
}
```
In the last example, a is a global variable. In a **web page**, global variables belong to the **window object**. Global variables can be used (and changed) by all scripts in the page (and in the window).

In the first example, a is a local variable. A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

Global and local variables with the same name are different variables. Modifying one, does not modify the other. Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

**Variable Lifetime**

Global variables live until the page is is discarded, like when you navigate to another page or close the window. Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

**JavaScript Nested Functions**

All functions have access to the global scope. In fact, **in JavaScript, all functions have access to the scope "above" them**. JavaScript supports nested functions. **Nested functions** have access to the scope "above" them.

In this example, the inner function plus() has access to the counter variable in the parent function:
```
function add() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}
```
### JavaScript Closures

Remember **self-invoking functions**? What does this function do?
```
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3
```
The variable add is assigned the return value of a self-invoking function. The **self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression**. This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a **JavaScript closure**. It makes it possible for a function to have "private" variables. The counter is **protected by the scope of the anonymous function**, and can only be changed using the add function.

**A closure is a function having access to the parent scope, even after the parent function has closed**.
