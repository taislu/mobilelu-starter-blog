---
title: "Vue Computed Properties"
date: "2020-03-10"
description: The properties on the Vue instance that calculate a value rather than store a value.
category: Vue
---

[Vue Computed Properties](https://www.vuemastery.com/courses/intro-to-vue-js/vue-computed-properties)

In this lesson, we’ll be covering **Computed Properties**. These are properties on the Vue instance that calculate a value rather than store a value.

Our first goal in this lesson is to display our brand and our product as one string. Since computed properties calculate a value rather than store a value, let’s add the computed option to our instance and create a computed property called **title**.

**index.html**
```
<!-- title is a computed property -->
<h1>{{ title }}</h1>
```
**main.js**
```
data: {
        brand: 'Vue Mastery',
        product: 'Socks',
},
computed: {
        title() {
            return this.brand + ' ' + this.product
        }
}
```
This is pretty straightforward. When title is called, it will concatenate brand and product into a new string and return that string. Now all we need to do is put title within the h1 of our page.

We’ve taken two values from our data and computed them in such a way that we’ve created a new value. If brand were to update in the future, let’s say to “Vue Craftery”, our computed property would not need to be refactored. It would still return the correct string: “Vue Craftery Socks”. Our computed property title would still be using brand, just like before, but now brand would have a new value.

Computed property is **cached/saved** until dependency changes. It’s more efficient to use computed property than using methods which re-run every time when accessed.

### More Complex Examples

Change image and inStock data properies into computed properties

**main.js**
```
const app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        //image: './assets/vmSocks-green-onWhite.jpg',
        selectedVariant: 0,
        //inStock: true,
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
        /*
        updateProduct(productImage){
            this.image = productImage
        }
        */
    }
})
```
**index.html**
```
<div id="app">
        <div class="product">
            <div class="product-image">
                <img :src="image" >  <!-- v-bind shorthand -->
            </div>
            <div class="product-info">
                <!-- <h1>{{ product }}</h1> -->
                <!-- title is a computed property -->
                <h1>{{ title }}</h1>
                
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ outOfStock: !inStock }" >Out of Stock</p>

                <p>{{ sale }}</p>

                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <!-- Add key for Vue to track list identity -->
                <!--  
                <div v-for="v in variants" 
                     :key="v.variantId"
                     class="color-box"
                     :style="{ backgroundColor: v.variantColor }"
                     @mouseover="updateProduct(v.variantImage)"
                >   
                -->
                <div v-for="(v, index) in variants"
                     :key="v.variantId"
                     class="color-box"
                     :style="{ backgroundColor: v.variantColor }"
                     @mouseover="updateProduct(index)"
                >   
                </div>
                <!-- 
                <button v-on:click="cart += 1">Add to Cart</button>
                -->
                <button v-on:click="addToCart" 
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }"
                >Add to Cart</button>
                
                <div class="cart">
                    <p>Cart( {{cart}} )</p>
                </div>
                
            </div>
        </div>
    </div>
```
### What’d we learn
•	Computed properties **calculate a value** rather than store a value.   
•	Computed properties can use data from your app to calculate its values.    

### What else should we know?
Computed properties are **cached**, meaning the result is **saved until its dependencies change**. So when quantity changes, the cache will be cleared and the next time you access the value of inStock , it will return a fresh result, and cache that result.

