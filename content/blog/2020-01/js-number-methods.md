---
title: "JavaScript Number Methods"
date: "2020-01-26"
description: With JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
category: JavaScript
---

[JavaScript Number Methods](https://www.w3schools.com/js/js_number_methods.asp)

With JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties. Number methods help you work with numbers.

### The toString() Method

The **toString()** method returns a number as a string. All number methods can be used on any type of numbers (literals, variables, or expressions):

```js
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23

var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000
```

### The toFixed() Method

**toFixed()** returns a string, with the number written with a specified number of decimals:

```js
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
```

### The toPrecision() Method

**toPrecision()** returns a string, with a number written with a specified length:

```js
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600
```

### Converting Variables to Numbers

There are 3 **JavaScript methods** that can be used to convert variables to numbers:   

- The Number() method   
- The parseInt() method   
- The parseFloat() method   

These methods are not number methods, but **global JavaScript methods**.

```js
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

Number(new Date("2017-09-30"));    // returns 1506729600000
```

```js
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 
```

```js
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
```

### Number Properties

| Property | Description |
| -------- | ----------- |
| MAX_VALUE | Returns the largest number possible in JavaScript |
| MIN_VALUE | Returns the smallest number possible in JavaScript |
| POSITIVE_INFINITY | Represents infinity (returned on overflow) |
| NEGATIVE_INFINITY | Represents negative infinity (returned on overflow) |
| NaN | Represents a "Not-a-Number" value |




