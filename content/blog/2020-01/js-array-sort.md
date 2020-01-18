---
title: "Array Sort Method"
date: "2020-01-17"
description: The sort() method sorts the elements of an array in place and returns the sorted array.
category: JavaScript
---

[Array Sort Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

The **sort()** method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into **strings**, then comparing their sequences of **UTF-16** code units values.

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

#### Syntax : arr.sort([compareFunction])

The sort method can be conveniently used with **function expressions**:  
```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5]
```

**ES2015** provides **arrow function** expressions with even shorter syntax.
```js
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 2, 3, 4, 5]
```

Objects can be sorted, given the value of one of their properties.
```js
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
```

The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.
```js
var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Sorted:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort());
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Sorted without a compare function:', numericStringArray.sort());
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
```
This example produces the following output. As the output shows, **when a compare function is used, numbers sort correctly whether they are numbers or numeric strings**.

stringArray: Blue,Humpback,Beluga
Sorted: Beluga,Blue,Humpback

numberArray: 40,1,5,200
Sorted without a compare function: 1,200,40,5
Sorted with compareNumbers: 1,5,40,200

numericStringArray: 80,9,700
Sorted **without** a compare function: 700,80,9
Sorted **with** compareNumbers: 9,80,700

mixedNumericArray: 80,9,700,40,1,5,200
Sorted **without** a compare function: 1,200,40,5,700,80,9
Sorted **with** compareNumbers: 1,5,9,40,80,200,700

### Sorting with map

```js
// sorting with map
// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
console.log(list)

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})
console.log(mapped)

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});
console.log(mapped)

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});
console.log(result)

/**
[ 'Delta', 'alpha', 'CHARLIE', 'bravo' ]
[
  { index: 0, value: 'delta' },
  { index: 1, value: 'alpha' },
  { index: 2, value: 'charlie' },
  { index: 3, value: 'bravo' }
]
[
  { index: 1, value: 'alpha' },
  { index: 3, value: 'bravo' },
  { index: 2, value: 'charlie' },
  { index: 0, value: 'delta' }
]
[ 'alpha', 'bravo', 'CHARLIE', 'Delta' ] 
 */
```