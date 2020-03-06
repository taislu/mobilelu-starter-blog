---
title: "Intro-to-Vue The Vue Instance"
date: "2020-03-04"
description: how to use Vue to display data onto a webpage
category: Vue
---

[Intro-to-Vue The Vue Instance](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance)

In this lesson, we’ll show you how to use Vue to **display data onto a webpage**.

**Index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product App</title>
</head>
<body>
    <div id="app">
        <h1> {{ product }} </h1>
        <p>{{ description }}</p>
    </div>

    <!-- copy from https://vuejs.org/v2/guide/ -->
    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script src="main.js"></script>
</body>
</html>

<!-- usage examples & vue data binding is reactive
    {{ firstName + ' ' + lastName}}
    {{ clicked ? true : false }}
    {{ message.split(' ').reverse().join(' ') }}
    
    chrome -> inspect -> console
    type in : app.product = 'Coat' to change the display
-->
```
**main.js**
```
const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks123',
        description: 'Product description here'
    }
})
```

### The Vue Instance
```
const app = new Vue( {options} )
```
A Vue instance is the root of our application. It is created by passing an **options object** into it. Just like it sounds, this object has a variety of optional properties that give the instance the ability to store data and perform actions.

### Plugging in to an Element
```
el: '#app'
```
The Vue instance is then plugged into an element of your choosing, forming a relationship between the instance and that portion of the DOM. In other words, we’re **activating** Vue on the div with the id of app by setting **'``#app``'** as the **element ( el )** that our instance is plugged into.

### Putting our data in its place
```
data: {
        product: 'Socks123',
        description: 'Product description here'
    }
```
A Vue instance has a place for data, in its **data property**. The instance’s data can be accessed from inside the element that the instance is plugged into.

### Using an Expression
```html
<h1> {{ product }} </h1>
```
If we want our product to appear in our h1, we can put product inside these **double curly braces**. How does it work? **Inside the double curly braces, we’re using a JavaScript expression**.

### Important Term: Expression

Expressions allow us to utilize existing data values, together with logic, to **produce new data values**.

When Vue sees the expression {{ product }}, it recognizes that we are referencing the associated Vue instance’s data, and it replaces that expression with the value of product instead, in this case: “Socks123”.

Some other ways expressions can be used:
```html
{{ firstName + ' ' + lastName}}
{{ clicked ? true : false }}
{{ message.split(' ').reverse().join(' ') }}
```
### Introducing Reactivity

The reason Vue is able to display product ‘s value immediately is because Vue is **reactive**. In other words, the instance’s data is linked to every place that data is being referenced. So not only can Vue make its data appear within the HTML that references it, but that HTML will be updated to display new values any time that referenced data changes.

To prove that, let’s open the console and change the value of our product string. Look what happens.

**chrome -> inspect -> console**    
type in : **app.product** = 'Coat' (which will change the display from Socks123 to Coat)   

### What have we learned?    
•	How to begin writing a Vue application with a **Vue instance**, and how to load basic data onto the webpage.   
•	The Vue instance is the root of every Vue application   
•	The Vue instance plugs into an element in the DOM    
•	The Vue instance’s data can be displayed using the **mustache-like syntax {{ }}** called an **expression**.   
•	**Vue is reactive**    



