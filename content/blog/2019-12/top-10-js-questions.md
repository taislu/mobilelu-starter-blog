---
title: "Top 10 JavaScript Interview Questions"
date: "2019-12-27"
description: Top 10 commonly Asked JavaScript Interview Questions and its possible answers.
category: Q&A
---

<iframe width="100%" src="https://www.youtube.com/embed/oxoFVqetl1E" frameborder="0" allowfullscreen></iframe>

### what is the difference between "var" and "let" keywords? 1:15  
- let was introduced in ES2015/ES6
- let has **block scope** (which dies at the end of block)
- var has function scope
- var gets hoisted

### what is the difference between "==" and "===" signs? 3:54  
- "===" compares both value and type

### what is the difference between "let" and "const" keywords? 6:02  
- const variable can't be re-assigned, but can be modified for objects

### what is the difference between "undefined" and "null" keywords? 9:06  
- typeof(undefined) => undefined
- **typeof(null) => object**

### what is use of Arrow function? 10:01  
- Arrow functions were introduced in ES6.
- In **regular functions** the this keyword represented the object that called the function, which could be the **window, the document, a button or whatever**. With arrow functions the this keyword always represents the object that defined the arrow function.
- The popular airbnb eslint configuration enforces the use of JavaScript arrow functions any time you are creating an **anonymous function**.


<iframe width="100%" src="https://www.youtube.com/embed/yo3MJPcVJc8" frameborder="0" allowfullscreen></iframe>

### 0:33 - what is prototypal inheritance  
- Every object has prototype property. (Prototype based inheritance)

### 2:58 - what is the difference between function declaration & function expression  
```
function funcD(){
    console.log("function declaration")
}

let funcE = function(){
    console.log("function expression")
}
```

### 4:21 - what is promises and why do we use it  
- Promise is used for async calls with callback

### 6:43 - setTimeout()  
```
setTimeout(function(){
    console.log('a')
}, 0)
console.log('b')
console.log('c')
```
display : b, c, a (setTimeout is an async call)

### 8:23 - what is closure and how do we use it  
- The inner function can hold the variable even if the parent function is closed
- A closure is a function having access to the parent scope, even after the parent function has closed.
