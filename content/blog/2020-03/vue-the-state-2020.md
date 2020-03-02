---
title: "The State of Vue.js in 2020"
date: "2020-03-02"
description: In the last few years, Vue.js has grown from a relatively unknown framework to the fastest growing JavaScript framework of all time. 
category: Vue
---

<iframe width="100%" src="https://www.youtube.com/embed/eiUgVa2Td_k" frameborder="0" allowfullscreen></iframe>

In the last few years, **Vue.js** has grown from a relatively unknown framework to the fastest growing JavaScript framework of all time. This talk will cover what's new in the ecosystem as well design patterns and best practices. No Vue experience is necessary but you should be familiar with JavaScript.

**What is Vue.js**   
•	Progressive  
•	Lightweight(10k gzip)   
•	Incrementally adoptable   
•	Web framework   
•	Virtual DOM   

**History of Vue.js**   
•	Evan You (creator, 2013)   
•	Vue.js Launch (2014)   
•	Vue.js 2.0 (2016)   
•	Vue Router 3 & Vuex 3 (2017)   
•	Vue CLI 4 (2019)   
•	Vue.js 3.0 (2020)   

**Why Vue.js**   
•	Low learning curve   
•	Progressive; Incrementally adoptable   
•	Lightweight(10k gzip)   
•	Flexible – Use as a library or full-featured framework   
•	Fast prototyping   

9:00 **Angular Influence** : Directives, Two-way data binding, Opinionated ecosystem, Templates, Dependency Injection

10:23 **React Influence** : Virtual DOM, Composable components, Mixed logic & view, Flexibility

11:58 **jQuery Influence** : Simplicity, Naming conventions

15:00 Vue.js Use Cases : 

17:24 Approachable

Bootstrapping with a **GUI**
```bash
npm i -g @vue/cli && vue ui
```
Bootstrapping with **CLI**
```bash
vue create myapp
```
**Component Layout**
```
<template>
<div id=”app”>
    <Header />
    {{ name }}
    <input v-model=”name”>
</div>
</template>

<script>
import Header from ‘./Header.vue’

export default {
    components:{
        Header
    }
    data(){
        return {
            name: ‘’
        }
    }
}
</script>

<style>
    #app { color: blue; }
</style>
```
22:25 Reactivity    
24:20 Built-in Animations    
25:30 Slots   
26:52 Complex Forms   

#### Vue3

29:18 Options API   
31:15 Composition API (New)   
33:40 Composition Functions   
38:29 Access to Lower-level APIs   
39:55 Speed   
41:17 Ecosystem   

***CoreVue Tools***   
State Management: Vuex   
Routing: Vue-Router   
DevTools: Vue-DevTools   
CLI: Vue CLI   
Testing: Vue-Test-Utils   
Internationalization: Vue-I18N   
Static Site Generator: Vue-Press   

42:37 Community Tools

46:54 ***Vue Resources***   
Freecodecamp Vue tutorial   
Intro Material & Animations: Sarah Drasner    
Vue Examples: The Cookbook    
Vue Courses: Vue School    
Framework Comparison: Vue Guide    
Podcast: Views on Vue    

