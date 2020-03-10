---
title: "Vue Class and Style Binding"
date: "2020-03-09"
description: How to dynamically style our HTML by binding data to an element’s style attribute, as well as its class.
category: Vue
---

[Vue Class and Style Binding](https://www.vuemastery.com/courses/intro-to-vue-js/class-&-style-binding)

In this lesson we’ll be learning how to dynamically style our HTML by binding data to an element’s **style attribute**, as well as its **class**.

Our first goal in this lesson is to use our variant colors to style the background-color of divs. Since our variant colors are “green” and “blue”, we want a div with a green background-color and a div with a blue background-color.

**index.html**
```html
<!-- Add key for Vue to track list identity -->
<div v-for="v in variants" 
     :key="v.variantId"
     class="color-box"
     :style="{ backgroundColor: v.variantColor }"
     @mouseover="updateProduct(v.variantImage)"
>   
</div>
```
**main.js**
```
variants: [
    {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green-onWhite.jpg'
    },
    {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue-onWhite.jpg'
    }
],
```
### Style Binding Examples

**HTML**
```html
<p :style=”{ fontSize: fontSize }”> … </p>
<!--
<p :style=”{ ‘font-size’: fontSize }”> … </p>
-->
```
evaluates to
```html
<p style=”font-size: 13px”> … </p>
```

**JS**
```
data: {
color: ‘red’,
fontSize: ‘13px’
}
```
=======================================  
**HTML**
```html
<span :style=”styleObject”> … </span>
```
evaluates to
```html
<span style=”color: red; font-size: 13px”> … </span>
```

**JS**
```
data: {
    styleObject: {
        color: ‘red’,
        fontSize: ‘13px’
    }
}
```
=======================================  
**HTML**
```html
<p :style=”[styleObject1, styleObject2]”> … </p>
```
**JS**
```
data: {
    styleObject1: {
        color: ‘red’,
        fontSize: ‘13px’
    },
    styleObject2: {
        margin: ‘5px’,
        padding: ‘20px’
    },
}
```
In the event handling lesson, we created an event handler that updates the product’s image based on which p tag was hovered on. Instead of printing out the variant’s color into a p tag, we want to use that color to set the style of a **div’s background-color**. That way, instead of hovering over text in a p tag, we can hover over colored squares, which would update the product’s image to match the color that was hovered on.

First, let’s add a class of **color-box** to our div, which gives it a width, height and margin. Since we’re still printing out “green” and “blue” onto the page, we can make use of those variant color strings and bind them to our style attribute, like so:

**index.html**
```html
<div class=”color-box” v-for="v in variants" :key="v.variantId"
     :style="{ backgroundColor: v.variantColor }"
>
    <p @mouseover="updateProduct(v.variantImage)">{{ v.variantColor }}</p>
</div>
```
**style.css**
```css
.color-box {
    width: 40px;
    height: 40px;
    margin-top: 5px;
}
```
We are using an **inline style** to dynamically set the background-color of our divs, based on our variant colors ( variant.variantColor ).

Now that our divs are being styled by the variantColor, we no longer need to print them out. So we can delete the p tag and move its @mouseover into the div itself.

Now when we hover over the blue box and the blue socks appear, hover over the green box and the green socks appear. Pretty neat!

### Class Binding

Currently, we have this in our data:
```
inStock: true,
```
When this boolean is false, we shouldn’t allow users to click the “Add to Cart” button, since there is no product in stock to add to the cart. Fortunately, there’s a **built-in HTML attribute, disabled**, which will disable the button.

As we learned in our second lesson in this series, we can use **attribute binding** to add the disabled attribute whenever inStock is false, or rather not true: !inStock.

**index.html**
```html
<button v-on:click="addToCart" 
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
>Add to Cart</button>
```
Now our button is disabled whenever inStock is false. But that doesn’t change the appearance of the button. In other words, the button still appears clickable, even though it’s not.

**style.css**
```css
.disabledButton {
    background-color: #d8d8d8;
  }
```
In a similar way to how we just bound inStock to the button’s disabled attribute, we can bind a disabledButton class to our button whenever inStock is false. That way, our button will also appear disabled.

It works! The button is now grayed out when inStock = false.

### Let’s break this down.
```
:class="{ disabledButton: !inStock }"
```
We’re using the **v-bind** directive’s shorthand : to bind to our button’s **class**. Inside the brackets we’re determining the presence of the disabled-button class by the truthiness of the data property inStock.

In other words, when our product is not in stock ( !inStock ), the disabledButton class is added. Since the disabled-button class applies a gray background-color, the button turns gray.

Great! We’ve combined our new skill **class binding with attribute binding** to disable our button and turn it gray whenever our product inStock is false.

### What’d we learn
•	Data can be bound to an element’s style attribute   
•	Data can be bound to an element’s class    
•	We can use expressions inside an element’s class binding to evaluate whether a class should appear or not   

=======================================

### Class Binding Examples
```html
<div class=”color-box”
        : class=”{ active: activeClass, ‘text-danger’: errorClass }”>
…
</div>
```
evaluates to
```
<div class=”color-box active”> … </div>
```
**JS**
```
data: {
    activeClass: true,
    errorClass: false
}
```
=======================================
```
<div :class=”classObject”> … </div>
```
evaluates to
```
<div :class=”active”> … </div>
```
**JS**
```
data:{
    classObject: {
        active: true,
        ‘text-danger’: false
    }
}
```
=======================================
```
<div :class=”[activeClass, errorClass]”> … </div>
```
evaluates to
```
<div :class=”active text-danger”> … </div>
```
**JS**
```
data: {
    activeClass: ‘active’,
    errorClass: ‘text-danger’
}
```
======================================= 
```
<div :class=”[isActive ? activeClass : ‘ ‘ ”> … </div>
```
**JS**
```
data: {
    isActive: true,
    activeClass: ‘active’
}
```
### Challenge

When inStock is false, bind a class to the “Out of Stock” p tag that adds  text-decoration: line-through to that element.

**style.css**
```
.outOfStock {
    text-decoration: line-through;
  }
```
**index.html**
```
<h1>{{ product }}</h1>
<p v-if="inStock">In Stock</p>
<p v-else :class="{ outOfStock: !inStock }" >Out of Stock</p>
```


