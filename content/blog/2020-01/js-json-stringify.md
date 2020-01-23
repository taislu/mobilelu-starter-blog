---
title: "Convert a JavaScript object into a string with JSON.stringify()"
date: "2020-01-05"
description: A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string.
category: JavaScript
---

[JSON.stringify()](https://www.w3schools.com/js/js_json_stringify.asp)

A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with **JSON.stringify()**.

Imagine we have this object in JavaScript:
```js
var obj = { name: "John", age: 30, city: "New York" };
```
Use the JavaScript function JSON.stringify() to convert it into a string.
```js
var myJSON = JSON.stringify(obj);
```
The result will be a string following the JSON notation.

myJSON is now a string, and ready to be sent to a server:

**Example**    
```js
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
```
