---
title: "JavaScript Object Prototype"
date: "2020-01-20"
description: All JavaScript objects inherit properties and methods from a prototype.
category: JavaScript
---

[JavaScript Object Prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)

All JavaScript objects inherit properties and methods from a **prototype**.

Example
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```
you can **not** add a new property to an existing object constructor like this : Person.nationality = "English"; To add a new property to a constructor, you must add it to the **constructor function**:

Example
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```

### Prototype Inheritance

All JavaScript objects inherit properties and methods from a **prototype**:  
•	Date objects inherit from **Date.prototype**  
•	Array objects inherit from **Array.prototype**  
•	Person objects inherit from **Person.prototype**   

The **Object.prototype** is on the top of the prototype inheritance chain:
Date objects, Array objects, and Person objects inherit from Object.prototype.

### Adding Properties and Methods to Objects

The JavaScript **prototype property** allows you to **add new properties** to object constructors:
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
```

The JavaScript **prototype property** also allows you to **add new methods** to objects constructors:
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```


