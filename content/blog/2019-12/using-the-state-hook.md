---
title: "Using the State Hook"
date: "2019-12-07"
description: A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.
category: React
---

[Using the State Hook](https://reactjs.org/docs/hooks-state.html)

Hooks are a new addition in **React 16.8**. They let you use state and other React features without writing a class.

This example renders a counter. When you click the button, it increments the value:
```
import React, { useState } from 'react';
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
The **useState** returns a pair: **the current state value and a function** that lets you update it. You can call this function from an event handler or somewhere else. It’s **similar to this.setState in a class**, except **it doesn’t merge the old and new state** together. 

The only argument to useState is the **initial state**. In the example above, it is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. **The initial state argument is only used during the first render**.

### Equivalent Class Example
If you used classes in React before, this code should look familiar:
```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```
The state starts as { count: 0 }, and we increment state.count when the user clicks a button by calling this.setState(). 
### Declaring multiple state variables
You can use the State Hook more than once in a single component:
```
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```
### But what is a Hook?
Hooks are **functions** that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they **let you use React without classes**.
### When would I use a Hook? 
If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.
### What does useState return? 
It returns a pair of values: the current state and a function that updates it. This is why we write const **\[count, setCount\] = useState()**. This is similar to this.state.count and this.setState in a class, except you get them in a pair.
### Reading State
When we want to display the current count in a class, we read this.state.count:
```
  <p>You clicked {this.state.count} times</p>
```
In a function, we can use count directly:
```
  <p>You clicked {count} times</p>
```
### Updating State
In a class, we need to call this.setState() to update the count state:
```
  <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
  </button>
```
In a function, we already have setCount and count as variables so we don’t need this:
```
  <button onClick={() => setCount(count + 1)}>
    Click me
 </button>
```
### What Do Square Brackets Mean?
You might have noticed the square brackets when we declare a state variable:
```
  const [count, setCount] = useState(0);
```
The names on the left aren’t a part of the React API. You can name your own state variables:
```
  const [fruit, setFruit] = useState('banana');
```
This JavaScript syntax is called [“array destructuring”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring). It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:
```
  var fruitStateVariable = useState('banana'); // Returns a pair
  var fruit = fruitStateVariable[0]; // First item in a pair
  var setFruit = fruitStateVariable[1]; // Second item in a pair
```
**When we declare a state variable with useState, it returns a pair — an array with two items.** The first item is the current value, and the second is a function that lets us update it. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use **array destructuring** instead.


