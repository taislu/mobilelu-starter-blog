---
title: "Vue Components"
date: "2020-03-11"
description: Components are reusable blocks of code that can have both structure and functionality. They help create a more modular and maintainable codebase.
category: Vue
---

[Vue Components](https://www.vuemastery.com/courses/intro-to-vue-js/components)

In this lesson we’ll be learning about the wonderful world of components. **Components** are **reusable blocks of code** that can have both structure and functionality. They help create a more modular and maintainable codebase.

In a Vue application, we don’t want all of our data, methods, computed properties, etc. living on the root instance. Over time, that would become unmanageable. Instead, we’ll want to break up our code into **modular pieces** so that it is easier and more flexible to work with.

We register the component like this:
```
Vue.component( ‘product’, {} )
```
The first argument is the name we choose for the component, and the second is an options object, similar to how we created our initial Vue instance.

In the Vue instance, we used the el property to plug into an element in the DOM. For a component, we use the **template property** to specify its **HTML**.

There are several ways to create a template in Vue, but for now we’ll be using a **template literal**, with **back ticks**.

If all of our template code was not nested within one element, such as this div with the class of “product”, we would have gotten this error:

Component template should contain exactly one root element

In other words, a component’s template can only return **one element**.

**main.js**
```
vue.component( ‘product’, {
    props: {
        message: {
            type: String,
            required: true,
            default: “Hi”
        }
    },
    template: ` // contains one root element
        <div>
        …
        </div>
    `,
    data() {    // returns a fresh data object for each component
        return {
            …
        }
    }
} )
```
Props : a custom attribute for passing data into our components

As you can see, this component looks nearly identical in structure to our original instance. But did you notice that **data is now a function**? Why the change?

Because we often want to reuse components. And if we had multiple product components, we’d need to ensure a separate instance of our data was created for each component. Since data is now a function that returns a **data object**, each component will definitely have its own data. If data weren’t a function, each product component would be sharing the same data everywhere it was used, defeating the purpose of it being a reusable component.

index.html
```html
    <div id="app">
        <product :premium="premium"></product>
    </div>
  
    <!-- production version, optimized for size and speed -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>

    <script src="main.js"></script>
```
main.js
```
Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img :src="image" >  <!-- v-bind shorthand -->
            </div>
            <div class="product-info">
                <!-- title is a computed property -->
                <h1>{{ title }}</h1>
                
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ outOfStock: !inStock }" >Out of Stock</p>
                <p> User is premium: {{ premium }} </p>
                <p> Shipping is {{ shipping }} </p>
                <p>{{ sale }}</p>

                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <!-- Add key for Vue to track list identity -->
                <div v-for="(v, index) in variants"
                     :key="v.variantId"
                     class="color-box"
                     :style="{ backgroundColor: v.variantColor }"
                     @mouseover="updateProduct(index)"
                >   
                </div>
                
                <button v-on:click="addToCart" 
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }"
                >Add to Cart</button>
                
                <div class="cart">
                    <p>Cart( {{cart}} )</p>
                </div>
                
            </div>
        </div>
    `,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            outStockClass: 'text-decoration: line-through',
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: './assets/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: './assets/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            cart: 0,
            onSale: true
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if(this.onSale)
                return this.brand + ' ' + this.product + ' are on sale!'
        },
        shipping() {
            if(this.premium) return "Free"
            return 2.99
        }
    },
    methods: {
        //ES6 shorthand
        addToCart(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        premium: false
    }
    
})
```
Often in an application, a component will need to receive data from its parent. In this case, the parent of our product component is the root instance itself.

In Vue, we use **props** to handle this kind of downward data sharing. Props are essentially variables that are waiting to be filled with the data its parent sends down into it.

Notice that we’re using some built-in props validation, where we’re specifying the data type of the premium prop as Boolean, and making it required.

Now that we’re successfully passing data into our component, let’s use that data to affect what we show for shipping. Remember, if premium is true, that means shipping is free. So let’s use our premium prop within a computed property called shipping.

Now, we’re using **our prop ( this.premium )**, and whenever it’s true, shipping will return “Free”. Otherwise, it’ll return 2.99.

**Good to Know:** You should not mutate props inside your child components.

### What’d we learn
•	Components are blocks of code, grouped together within a custom element   
•	Components make applications more manageable by breaking up the whole into reusuable parts that have their own structure and behavior   
•	**Data on a component must be a function**   
•	**Props** are used to pass data from parent to child   
•	We can specify requirements for the props a component is receiving   
•	Props are fed into a component through a custom attribute   
•	**Props can be dynamically bound to the parent’s data**   
•	Vue dev tools provide helpful insight about your components   




