---
title: "Learn Vue.js"
date: "2020-03-03"
description: Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. 
category: Vue
---

<iframe width="100%" src="https://www.youtube.com/embed/4deVCNJq3qc" frameborder="0" allowfullscreen></iframe>

⭐️ Contents ⭐️ 

(0:32) Part 1:    
⌨️ The Vue Instance    
⌨️ Directives       
⌨️ Methods    
⌨️ Data-binding    
⌨️ Events    
⌨️ Filters    
⌨️ Computed Properties    
⌨️ Components    
⌨️ Component Lifecycle    
⌨️ Vue-cli    

### Code Examples:

#### Add Vue component   
**Template**
```html
<div id="root">
  {{ kittifyName }}
  <br>
  <input v-model="newCat" @keyup.enter="addKitty">
  <button @click="addKitty">
    + ADD
  </button>

  <ul>
    <li v-for="cat in cats">{{ cat.name }}</li>
  </ul>
  
  <cat-list :cats="cats" />
</div>
```
**Script**
```
Vue.component('cat-list',{
	props: ['cats'],
	template:`
  	<ul>
    	<li v-for="cat in cats">{{ cat.name }}</li>
    </ul>
  `
})

app = new Vue({
	el: '#root',
  component: [
  	'cat-list'
  ],
  data: {
  	cats: [
    	{ name: 'kitkat' },
      { name: 'fish' },
      { name: 'henry' }
    ],
    newCat: ''
  },
  methods: {
  	addKitty: function(){
    	this.cats.push({name:this.newCat})
      this.newCat = ''
    }
  },
  computed: { // used a lot for Vuex state management
  	kittifyName: function(){
    	if(this.newCat.length>1){
      	return this.newCat + 'y'
      }
    }
  }
})
```
***************************************************************************************

#### Add computed functions
**Template**
```html
<div id="root">
  {{ kittifyName }}
  <br>
  <input v-model="newCat" @keyup.enter="addKitty">
  <button @click="addKitty">
    + ADD
  </button>

  <ul>
    <li v-for="cat in cats">{{ cat.name }}</li>
  </ul>
</div>
```
**Script**
```
new Vue({
	el: '#root',
  data: {
  	cats: [
    	{ name: 'kitkat' },
      { name: 'fish' },
      { name: 'henry' }
    ],
    newCat: ''
  },
  methods: {
  	addKitty: function(){
    	this.cats.push({name:this.newCat})
      this.newCat = ''
    }
  },
  computed: { // used a lot for Vuex state management
  	kittifyName: function(){
    	if(this.newCat.length>1){
      	return this.newCat + 'y'
      }
    }
  }
})
```
******************************************************************************************************

#### Add v-on button click, key enter, and filter functions
**Template**
```html
<div id="root">
  <input v-model="newCat" @keyup.enter="addKitty">
  <button @click="addKitty">
    + ADD
  </button>

  <ul>
    <li v-for="cat in cats">{{ cat.name | capitalize | kittify }}</li>
  </ul>
</div>
```
**Script**
```
new Vue({
	el: '#root',
  data: {
  	cats: [
          { name: 'kitkat' },
          { name: 'fish' },
          { name: 'henry' }
    ],
    newCat: ''
  },
  methods: {
  	addKitty: function(){
    	this.cats.push({name:this.newCat})
        this.newCat = ''
    }
  },
  filters: {
    capitalize: function(value){
    	return value.toUpperCase()
    },
    kittify: function(value){
    	return value + 'y'
    }
  }
})
```
******************************************************************************************************

#### Create dynamic lists using v-for and data array
**Template-1**
```html
<div id="root">
  <ul>
    <li v-for="cat in cats">{{ cat }}</li>
  </ul>
</div>
```
**Script**
```
new Vue({
	el: '#root',
  data: {
  	cats: [
          'kitkat',
          'fish',
          'henry',
          'bosco',
          'melanthios'
    ]
  }
})
```
**Template-2**
```html
<div id="root">
  <ul>
    <li v-for="cat in cats">{{ cat.name }}</li>
  </ul>
</div>
```
**Script**
```
new Vue({
	el: '#root',
  data: {
  	cats: [ // array of objects
          { name: 'kitkat' },
          { name: 'fish' },
          { name: 'henry' }
    ]
  }
})
```
***********************************************************************************

#### Email Sign Up with Input and submit button using v-model and v-bind
**Template**
```html
<div id="root">
  Sign Up
  <br>
  <input v-model="email" :class="[email.length < 2 ? 'red' : 'green']" >
  <br>
  <button onclick="alert('signed up')" :disabled="email.length < 2">
    Submit
  </button>
</div>
```
**Script**
```
new Vue({
	el: '#root',
  data: {
  	email: ''
  }
})
```
**Style**
```css
.red {
  border: 2px solid red;
}

.green {
  border: 2px solid green;
}
```

[Vue Lifecycle](https://vuejs.org/v2/guide/instance.html)

35:33 Local Development Vue-Cli

[Vue CLI](https://cli.vuejs.org/guide/)

### Installation
```bash
npm install -g @vue/cli
vue –-version

vue create quiz
>default

$ cd quiz
$ npm run serve
```
App running at:
  - Local:   http://localhost:8080/

**public/index.html**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
**src/main.js**
```
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

**src/App.vue**
```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
```
```
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```
```css
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

**src/components/HelloWorld.vue**
```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>
```
```
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```
```css
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```


