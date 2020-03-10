---
title: "Vue Event Handling"
date: "2020-03-08"
description: How to listen for DOM events that we can use to trigger methods
category: Vue
---

[Vue Event Handling](https://www.vuemastery.com/courses/intro-to-vue-js/event-handling)

In this lesson we’ll be learning how to listen for **DOM events** that we can use to trigger methods. We want to have a button that increments the number of items in our cart.

We need a button to listen for click events on it, then trigger a method when that click happens, in order to increment our cart total.

First, we’ll add a new data property for our cart.
```
cart: 0
```
In our HTML, we’ll create a div for our cart. We’ll add a p inside it to display our cart data’s value.
```html
<div class="cart">
    <p>Cart( {{cart}} )</p>
</div>
```
We’ll also make a button to add items to our cart.
```html
<!-- 
<button v-on:click="cart += 1">Add to Cart</button>
-->
<button v-on:click="addToCart">Add to Cart</button>
```
As you can see, we’re using Vue’s **v-on** directive to increment the value of cart

This works. But **how is it working**?

Let’s dissect this syntax. We say v-on, which let’s Vue know we’re listening for events on this button, and after the : we specify the kind of event we are listening for, in this case: a click. Inside the quotes, we’re using an expression that adds 1 to the value of cart every time the button is clicked.

This is simple, but not entirely realistic. Rather than using the expression cart += 1, let’s make the click trigger a method that increments the value of cart instead
```
methods: {
    addToCart: function(){
        this.cart += 1
    },   
}
```
As you can see, addToCart is the name of a method that will fire when that click event happens. We haven’t yet defined that method, so let’s do that now, right on our instance.
Just like it does for its data, the Vue instance has an optional property for methods. So we’ll write out our addToCart method within that option.

Now, when we click our button, our addToCart method is triggered, which increments the value of cart, which is being displayed in our p tag.

### Let’s break this down further.

Our button is listening for click events with the v-on directive, which triggers the addToCart method. That method lives within the methods property of the Vue instance as an anonymous function. The body of that function adds 1 to the value of this.cart. Because this refers to the data of the instance we’re currently in, our function is adding 1 to the value of cart, because this.cart is the cart inside our data property.

Now that we’ve learned the basics of event handling in Vue, let’s look at a more complex example.

First, let’s add a variantImage to each of our variants.
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
Now each variant has an image with green and blue socks, respectively.

We want to be able to **hover our mouse over** a variant’s color and have its variantImage show up where our product image currently is.

We’ll use the v-on directive again, but this time we’ll use its shorthand @ and listen for a mouseover event.
```html
<!-- Add key for Vue to track list identity -->
<div v-for="v in variants" :key="v.variantId">
    <p @mouseover="updateProduct(v.variantImage)">{{ v.variantColor }}</p>
</div>
```
Notice that we’re passing v.variantImage in as an argument to our updateProduct method.

Let’s build out that method.
```
updateProduct(productImage){
    this.image = productImage
}
```
When it’s called, v.variantImage is passed in as productImage and is used to update the value of **this.image**. As we just learned, this.image is image. So the value of image is now dynamically updating based on the variant that was hovered on.

### ES6 Syntax
Instead of writing out an **anonymous function** like    

updateProduct: function(productImage)

we can use the **ES6 shorthand** and just say 

updateProduct(productImage)

These are equivalent ways of saying the same thing.

### What’d we Learn   
•	The **v-on** directive is used to allow elements to listen for events   
•	The shorthand for v-on is **@**   
•	You can specify the type of event to listen for:   
        click   
        mouseover   
        any other DOM event   

•	The v-on directive can trigger a method   
•	Triggered methods can take in arguments   
•	**this** refers to the current Vue instance’s data as well as other methods declared inside the instance   

### Vue Event Examples
```html
<button @click=”addToCart”>Add to cart</button>
<div @mouseover=”updateProduct”>Color</div>
<form @submit=”addToCart”>… </form>
<input @keyup.enter=”send”>
<!-- .enter is a modifier -->
```

**index.html**
```html
<div id="app">
    <div class="product">
        <div class="product-image">
            <img :src="image" >  <!-- v-bind shorthand -->
        </div>
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <!-- Add key for Vue to track list identity -->
            <div v-for="v in variants" :key="v.variantId">
                <p @mouseover="updateProduct(v.variantImage)">{{ v.variantColor }}</p>
            </div>
            <!-- 
            <button v-on:click="cart += 1">Add to Cart</button>
            -->
            <button v-on:click="addToCart">Add to Cart</button>
            
            <div class="cart">
                <p>Cart( {{cart}} )</p>
            </div>
            <button v-on:click="removeFromCart">Remove from Cart</button>
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
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
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
        cart: 0
    },
    methods: {
        //ES6 shorthand
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart>0) this.cart -= 1
        },
        updateProduct(productImage){
            this.image = productImage
        }
        /*
        addToCart: function(){
            this.cart += 1
        },
        updateProduct: function(productImage){
            this.image = productImage
        }
        */
    }
})
```

[Vue Essentials Cheat Sheet](https://taisluwebsitebucket1.s3-us-west-2.amazonaws.com/HTML/pdf/Vue-Essentials-Cheat-Sheet.pdf)



