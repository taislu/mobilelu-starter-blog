---
title: "Vue Communicating Events"
date: "2020-03-11"
description: How to communicate from a child component up to its parent. Our product component will be able to tell its parent, the root instance, that an event has occurred, and send data along with that event notification.
category: Vue
---

[Vue Communicating Events](https://www.vuemastery.com/courses/intro-to-vue-js/communicating-events)

In this lesson we’ll learn how to **communicate from a child component up to its parent**. Our product component will be able to tell its parent, the root instance, that an event has occurred, and **send data along with that event notification**.

Now that product is its own component, it doesn’t make sense for our cart to live within product. It would get very messy if every single product had its own cart that we had to keep track of. Instead, we’ll want the cart to live on the root instance, and have product communicate up to that cart when its “Add to Cart” button is pressed.

Let’s move the cart back to our root instance.

**main.js**
```
const app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods: {
        increaseCart(id){
            this.cart.push(id)
        },
        removeCart(id){ // remove all items with id
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                   this.cart.splice(i, 1);
                   //break
                }
            }
        }
    }
})
```
And we’ll move our cart’s template into our index.html:

**index.html**
```
   <div id="app">
        <div class="cart">
            <p>Cart( {{cart.length}} )</p>
        </div>
        <product :premium="premium" 
                 @add-to-cart="increaseCart"
                 @remove-from-cart="removeCart"
        />
    </div>
```

**main.js**
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
 
                <button @click="removeFromCart" >
                    Remove from cart
                </button>
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
                    variantQuantity: 2
                }
            ],
            //cart: 0, move cart to global position
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
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index){
            this.selectedVariant = index
        }
    }
})
```
Here we are using **@add-to-cart** in a similar way as we are using :premium. Whereas :premium is a funnel on product that data can be passed down into, @add-to-cart is essentially a radio that can receive the event emission from **when the “Add to Cart” button was clicked**. Since this radio is on product, which is nested within our root instance, the radio can blast the announcement that a click happened, which will **trigger the increaseCart method, which lives on the root instance**.

This code essentially translates to: “When you hear that the “Add to Cart” event happened, run the increaseCart method.

in a real application, it’s not helpful to only know that a product was added to the cart, we’d need to know which product was just added to the cart. So we’ll need to pass data up along with the event announcement.

We can add that in as a second argument when we emit an event:
```
addToCart() {
    this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
},
```
Now, along with the announcement that the click event occurred, the id of the product that was just added to the cart is sent as well. Instead of just incrementing the number of cart, we can now make cart an array:
```
cart: []
```
And push the product’s id into our cart array:
```
methods: {
    increaseCart(id) {
        this.cart.push(id)
    }
}
```
Display the amount of products with array length
```
<p>Cart({{ cart.length }})</p>
```
Now we’re just displaying the length of the array, or in other words: the number of products in the cart. It looks just like it did before, but instead of only incrementing the value of cart by 1, now we’re actually sending data about which product was just added to the cart.

### Steps

1.Move cart display to index.html
```
<div id="app">
    <div class="cart">
        <p>Cart( {{ cart.length }} )</p>
    </div>
    <product :premium="premium"></product>
</div>
```

2.Move cart data property to Vue instance
```
data: {
    premium: false,
    cart: []
},
```

3.Add $emit() add-to-cart event in product component 
```
addToCart(){
    this.$emit('add-to-cart')
},
```

4.Add @add-to-cart=”increaseCart” in index.html to listen to the event which will trigger increaseCart method in the Vue instance to increae the cart
```
<div id="app">
    <div class="cart">
        <p>Cart( {{cart.length}} )</p>
    </div>
    <product :premium="premium" 
                @add-to-cart="increaseCart"
                @remove-from-cart="removeCart"
    />
</div>
```
5.Add increaseCart method in Vue instance
```
increaseCart(id){
    this.cart.push(id)
}
```
### What’d we learn
•	A component can let its parent know that an event has happened with **$emit**    
•	A component can use an event handler with the **v-on directive ( @ for short)** to listen for an event emission, which can **trigger a method on the parent**    
•	A component can **$emit data** along with the announcement that an event has occurred    
•	A parent can use data emitted from its child    



