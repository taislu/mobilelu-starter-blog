---
title: "JavaScript Array & Object Destructuring in ES6 "
date: "2019-12-04"
description: Destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.     
category: JavaScript
---

[Destructuring Assignment in ES6 Arrays](https://dev.to/sarah_chima/destructuring-assignment---arrays-16f)

**Destructuring assignment** is a cool feature that came along with **ES6**. Destructuring is a JavaScript expression that makes it possible to **unpack values from arrays, or properties from objects, into distinct variables**. That is, we can extract data from arrays and objects and assign them to variables.

Imagine if we want extract data from an array. Previously, how will this be done?
```
    var introduction = ["Hello", "I" , "am", "Sarah"];
    var greeting = introduction[0];
    var name = introduction[3];
    console.log(greeting);//"Hello"
    console.log(name);//"Sarah"
```
**ES6 destucturing assignment** makes it easier to extract this data.
```js
    var introduction = ["Hello", "I" , "am", "Sarah"];
    var [greeting, pronoun, …others] = introduction;
    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
    console.log(others);//"am", “Sarah”
```
We can also do this with the same result.
```js
    var [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];
    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
```
###Skipping Items in an Array

What if we want to get the first and last item on our array instead of the first and second item and we want to assign only two variables? This can also be done. Look at the example below.
```js
    var [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];
    console.log(greeting);//"Hello"
    console.log(name);//"Sarah"
```
What just happened? Look at the array on the left side of the variable assignment. Notice that instead of having just one comma, we had three. The comma separator is used to skip values in an array. So if you want to skip an item on an array, just use a comma.

Let's do another one. I think it's fun. Let's skip the first and third item on the list. How will we do this?
```js
    var [,pronoun,,name] = ["Hello", "I" , "am", "Sarah"];

    console.log(pronoun);//"I"
    console.log(name);//"Sarah"
```
So the comma separator does the magic. So if we want to skip all items, we just do this.

    var [,,,,] = ["Hello", "I" , "am", "Sarah"];

###Assigning the rest of an array

What if we want to assign some of the array to variables and the rest of the items on an array to a particular variable? We'll do this.
```js
    var [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting);//"Hello"
    console.log(intro);//["I", "am", "Sarah"]
```
###Destructuring Assignment with Functions

We can also extract data from an array returned from a function. Let's say we have a function that returns an array like the example below.
```js
    function getArray() {
        return ["Hello", "I" , "am", "Sarah"];
    } 
    var[greeting,pronoun] = getArray();

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
```
We get the same results.

###Using Default Values

Default values can be assigned to the variables just in case the value extracted from the array is undefined.
```js
  var[greeting = "hi",name = "Sarah"] = ["hello"];

  console.log(greeting);//"Hello"
  console.log(name);//"Sarah"
```
So name falls back to "Sarah" because it is not defined in the array.

###Swapping Values using Destructuring Assignment

One more thing. We can use destructuring assignment to swap the values of variables.
```js
    var a = 3;
    var b = 6;

    [a,b] = [b,a];

    console.log(a);//6
    console.log(b);//3
```
[Object Destructuring in ES6](https://dev.to/sarah_chima/object-destructuring-in-es6-3fm)

We want to extract data from an object and assign to new variables. Prior to ES6, how will this be done?
```js
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
    var name = person.name;
    var country = person.country;
    var job = person.job;
    console.log(name);//"Sarah"
    console.log(country);//"Nigeria"
    console.log(job);//Developer"
```
Let us repeat the above example with **ES6. Instead of assigning it one by one, we can use an object on the left to extract the data.
```js
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
    var {name, country, job} = person;
    console.log(name);//"Sarah"
    console.log(country);//"Nigeria"
    console.log(job);//Developer"
```
It is also valid to assign variables to an object that is not declared.
```js
    var {name, country, job} = {name: "Sarah", country: "Nigeria", job: "Developer"};
    console.log(name);//"Sarah"
    console.log(country);//"Nigeria"
    console.log(job);//Developer"
```
###Nesting in Object Destructuring

Objects can also be nested when destructuring.
```js
    var person = {
        name: "Sarah",
        place: {
            country: "Nigeria", 
            city: "Lagos" }, 
        friends : ["Annie", "Becky"]
        };

    var {name:foo,
         place: {
             country : bar,
             city : x}
          } = person;

    console.log(foo);//"Sarah"
    console.log(bar);//"Nigeria"
```
###Rest in Object Destructuring

The rest syntax can also be used to pick up property keys that are not already picked up by the destructuring pattern. Those keys and their values are copied onto a new object. Look at the example below.
```js
    var person = {name: "Sarah", country: "Nigeria", job: "Developer", friends: ["Annie", "Becky"]};
    var {name, friends, ...others} = person;

    console.log(name);//"Sarah"
    console.log(friends);//["Annie", "Becky"]
    console.log(others);// {country: "Nigeria", job: "Developer"}
```
Here, the remaining properties whose keys where not part of the variable names listed where assigned to the variable others. The rest syntax here is ...others. others can be renamed to whatever variable you want.

###Object Destructuring and Functions

Object Destructuring can be used to assign parameters to functions. We can use an example here.
```js
    function person({name: x, job: y} = {}) {
        console.log(x);
    }

    person({name: "Michelle"});//"Michelle"
    person();//undefined
    person(friend);//Error : friend is not defined
```
Notice the {} on the right hand side of the parameters object. It makes it possible for us to call a function without passing arguments. That is why we got undefined. If we remove it, we'll get an error message.

We can also assign default values to the parameters.
```js
    function person({name: x = "Sarah", job: y = "Developer"} = {}) {
        console.log(x);
    }
    person({name});//"Sarah"
```
We can do a whole lot of things with Object Destructuring as we have seen in the examples above.

[Mozilla Destructuring Examples]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

**Unpacking fields from objects passed as function parameter**
```js
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId( {id} ) {
  return id;
}

function whois( {displayName, fullName: {firstName: name}} ) {
  return `${displayName} is ${name}`;
}

console.log( userId(user) ); // 42
console.log( whois(user) );  // "jdoe is John"
```
This unpacks the id, displayName and firstName from the user object and prints them.

**Destructuring can be used with property names that are not valid JavaScript identifiers by providing an alternative identifier that is valid.**
```js
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"
```

**Array and Object destructuring can be combined. Say you want the third element in the array props below, and then you want the name property in the object, you can do the following:**
```js
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];

const [,, { name }] = props;
console.log(name); // "FizzBuzz"
```
Rest properties collect the remaining own enumerable property keys that are not already picked off by the destructuring pattern.
```js
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }
```
Computed property names, like on object literals, can be used with destructuring.
```js
let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"

For of iteration and destructuring

const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (const {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```
Nested object and array destructuring
```js
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
};

let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

