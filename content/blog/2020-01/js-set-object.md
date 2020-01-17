---
title: "JavaScript Set Object"
date: "2020-01-17"
description: The Set object lets you store unique values of any type, whether primitive values or object references.
category: JavaScript
---

[JavaScript Set Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

The **Set** object lets you store **unique** values of any type, whether [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) or object references. There are **7 primitive data types**: string, number, bigint, boolean, null, undefined, and symbol.
```js
const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1.has(1));
// expected output: true
console.log(set1.has(6));
// expected output: false
```
The **add()** method appends a new element with a specified value to the end of a Set object. The **has()** method returns a boolean indicating whether an element with the specified value exists in a Set object or not.

The **size** accessor property returns the number of (unique) elements in a Set object.
```js
const set1 = new Set();
const object1 = new Object();
set1.add(42);
set1.add('forty two');
set1.add('forty two');
set1.add(object1);
console.log(set1.size);
// expected output: 3
```
The **forEach()** method executes the provided callback once for each value which actually exists in the Set object. 

The **callback** is invoked with three arguments:  
•	the element value  
•	the element key   
•	the Set object being traversed   

There are no keys in Set objects, however, so the first two arguments are both values contained in the Set. This is to make it consistent with other forEach() methods for [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/foreach) and [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
```js
function logSetElements(value1, value2, set) {
  console.log('s[' + value1 + '] = ' + value2);
}
new Set(['foo', 'bar', undefined]).forEach(logSetElements);
// expected output: "s[foo] = foo"
// expected output: "s[bar] = bar"
// expected output: "s[undefined] = undefined"
```
The **values()** method returns a new Iterator object that contains the values for each element in the Set object in insertion order. The **keys()** method is an alias for this method (for similarity with Map objects); it behaves exactly the same and returns values of Set elements.
```js
var mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');
var setIter = mySet.values();
console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

