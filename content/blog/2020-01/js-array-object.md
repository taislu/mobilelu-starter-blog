---
title: "JavaScript Array Object"
date: "2020-01-17"
description: Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
category: JavaScript
---

[JavaScript Array Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

The JavaScript **Array** class is a **global object** that is used in the construction of arrays. Arrays are **list-like objects** whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since **an array's length can change at any time, and data can be stored at non-contiguous locations** in the array

The **shift()** method removes the first element from an array and **returns that removed element**. This method changes the length of the array.
```js
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1
```

The **unshift()** method adds one or more elements to the **beginning** of an array and returns the new length of the array.
```js
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

The **concat()** method is used to merge two or more arrays. This method does not change the existing arrays, but instead **returns a new array**.
```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers); 
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The **slice()** method returns a shallow copy of a portion of an array into a **new array object** selected from begin to end (end not included) where begin and end represent the index of items in that array. **The original array will not be modified**.
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```