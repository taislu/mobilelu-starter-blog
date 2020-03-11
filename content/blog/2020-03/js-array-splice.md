---
title: "JavaScript Array Splice"
date: "2020-03-11"
description: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
category: JavaScript
---

[JavaScript Array Splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

The **splice()** method changes the contents of an array by removing or replacing existing elements and/or adding new elements **in place**.
```
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

**start**   
The index at which to start changing the array.

**deleteCount** Optional       
An integer indicating the number of elements in the array to remove from start.

**item1, item2, ...** Optional       
The elements to add to the array, beginning from start. If you do not specify any elements, splice() will only remove elements from the array.

**Return value**

An array containing the deleted elements.     
If only one element is removed, an array of one element is returned.    
If no elements are removed, an empty array is returned.     

### Examples

**Remove 0 (zero) elements before index 2, and insert "drum"**
```
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
// removed is [], no elements removed
```
**Remove 1 element at index 3**
```
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"] 
```
**Remove all elements after index 2 (incl.)**
```
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```