---
title: "Vue Conditional Rendering"
date: "2020-03-06"
description: Uncovering how to conditionally display elements with Vue
category: Vue
---

[Vue Conditional Rendering](https://www.vuemastery.com/courses/intro-to-vue-js/conditional-rendering)

In this lesson we’ll be uncovering how to **conditionally** display elements with Vue. We want to display text that says if our product is in stock or not, based on our data.
```html
<p v-if="inStock">In Stock</p>
<p v-else>Out of Stock</p>
```
Often in a web application, we want elements to appear on the page depending on if a condition is met or not. For instance, if our product is not in stock, our page should display the fact that it’s out of stock.

Vue’s solution is simple and straightforward. Given that our data contains this new property:
```
inStock: true //or false
```
We can use the **v-if and v-else** directives to determine which element to render.

### Additional Conditional Syntax: v-else-if
```html
<p v-if="inventory > 10">In Stock</p>
<p v-else-if="inventory <= 10 && inventory > 0">Almost sold out !</p>
<p v-else>Out of Stock</p>
```
### Additional Conditional Syntax: v-show

If your app needs an element to frequently toggle on and off the page, you’ll want to use the **v-show** directive. An element with this directive on it will always be present in our DOM, but it will only be visible on the page if its condition is met. It will conditionally add or remove the CSS property **display: none** to the element. This method is more **performant** than inserting and removing an element over and over with v-if / v-else.

### What’d we learn
•	There are Vue directives to conditionally render elements:  
•	v-if  
•	v-else-if  
•	v-else  
•	v-show   

•	If whatever is inside the directive’s quotes is truthy, the element will display.   
•	You can use expressions inside the directive’s quotes.   
•	**V-show only toggles visibility**, it does not insert or remove the element from the DOM.   

**Index.html**
```html
    <div id="app">
        <div class="product">
            <div class="product-image">
                <img :src="image" >  <!-- v-bind shorthand -->
            </div>
            <div class="product-info">
                <h1>{{ product }}</h1>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out !</p>
                <p v-else>Out of Stock</p>
                <p v-show="onSale">On Sale</p>
            </div>
        </div>
    </div>
```
**main.js**
```
const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inventory: 100,
        onSale: true
    }
})
```


