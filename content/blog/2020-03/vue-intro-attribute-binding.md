---
title: "Vue Attribute Binding"
date: "2020-03-05"
description: Explore ways you can connect data to the attributes of your HTML elements
category: Vue
---

[Intro-to-Vue Attribute Binding](https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding)

In this lesson, we’ll explore ways you can connect data to the attributes of your HTML elements. We’ll use **attribute-binding** in order to display an image and attach alt text to it based on values from our instance’s data.

**index.html**
```html
    <div id="app">
        <div class="product">
            <div class="product-image">
                <!-- 
                <img v-bind:src="image" >
                -->
                <img :src="image" :alt="altText">  <!-- v-bind shorthand -->
            </div>
            <div class="product-info">
                <h1>{{ product }}</h1>
                <a :href="link" target="_blank">More products like this</a>
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
        altText: 'A pair of socks',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
    }
})
```
We want an image to show up on our page, but we need it to be dynamic. We want to be able to update that image in our data and have the image automatically update on the page. Since our src attribute is what pulls the image into this element, we’ll need **data to be bound to src** so that we can dynamically display an image based on the data at that time.

### Important Term: Data Binding

When we talk about data binding in Vue, we mean that the place where it is used or displayed in the template is directly linked, or bound to the source of the data, which is the data object inside the Vue instance.

In other words, the host of the data is linked to the target of the data. In this case, our data is hosted by the data property of our Vue instance. And we want to target that data from our src.

To bind the value of image in our data object to the src in our img tag, we’ll use Vue’s **v-bind** directive.
```html
<img v-bind:src="image" />
```
or
```html
<img :src="image" >  <!-- v-bind shorthand -->
```
This evaluates to:
```html
<img v-bind:src="./assets/vmSocks-green-onWhite.jpg" />
```

Voila! Our image appears. If the value of image were to change, the src will update to match, and the new image will appear.

Again, this happens because the data that lives in image is bound to our src attribute.

### Other v-bind examples
```
:alt=”description”
:href=”url”
:title=”title”
:class=”isActive”
:style=”isStyled”
:disabled=”isDisabled”
```
### So what have we learned?  
•	**Data in Vue instance can be bound to HTML attributes**.   
•	Syntax is **v-bind: or : for short**.   
•	The attribute name that comes after the : specifies the attribute we’re binding data to.   
•	Inside the attribute’s quotes, we reference the data we’re binding to.   
