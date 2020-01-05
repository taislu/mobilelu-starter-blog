---
title: "JSON Objects"
date: "2020-01-05"
description: JSON objects are surrounded by curly braces {} and written in key/value pairs.
category: JavaScript
---

[JSON Objects](https://www.w3schools.com/js/js_json_objects.asp)

JSON objects are surrounded by curly braces {}. JSON objects are written in key/value pairs. Keys must be strings, and values must be a valid **JSON data type** (string, number, object, array, boolean or null). Keys and values are separated by a colon. Each key/value pair is separated by a comma.

### Accessing Object Values

You can access the object values by using dot (.) notation:
```js
myObj = { "name":"John", "age":30, "car":null };
x = myObj.name;
```

You can also access the object values by using bracket ([]) notation:  
```js
myObj = { "name":"John", "age":30, "car":null };
x = myObj["name"];
```

### Looping an Object

You can loop through object properties by using the for-in loop:
```js
myObj = { "name":"John", "age":30, "car":null };
for (x in myObj) {
  document.getElementById("demo").innerHTML += x;
}
```

In a for-in loop, use the bracket notation to access the property values:
```js
myObj = { "name":"John", "age":30, "car":null };
for (x in myObj) {
  document.getElementById("demo").innerHTML += myObj[x];
}
```

### Nested JSON Objects

Values in a JSON object can be another JSON object.
```js
myObj = {
  "name":"John",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
 }
```

You can access nested JSON objects by using the dot notation or bracket notation:
```js
x = myObj.cars.car2;
// or:
x = myObj.cars["car2"];
```

### Modify Values

You can use the dot notation to modify any value in a JSON object:
```js
myObj.cars.car2 = "Mercedes";
```

You can also use the bracket notation to modify a value in a JSON object:
```js
myObj.cars["car2"] = "Mercedes";
```

### Delete Object Properties

Use the delete keyword to delete properties from a JSON object:
```js
delete myObj.cars.car2;
```