---
title: "Learn Sass in 30 minutes"
date: "2019-12-06"
description: Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.
category: CSS
---

With Sass we can create **variables**. We can use **imports** and **partials** to separate our CSS code into smaller chunks. We can use **mixins** that allow us to reuse CSS code. **Nesting** allows us to write children elements directly inside the parent element and much more!

<iframe width="100%" src="https://www.youtube.com/embed/BDOzg4lXcSg" frameborder="0" allowfullscreen></iframe>

### VSCode setup

VSCode -> Extension -> Live Sass Compiler -> install 

VSCode -> Settings -> search sass -> click on Live Sass Compiler -> Settings: Formats -> Edit in settings.json

liveSassCompile.settings.formats:

{  
“format”: “expended”,  
“extensionName”: “.css”,  
“savePath”: “/dist/css”  
}  

### Folder structure

scss/main.scss : source  
dist/css/main.css : compiled  
dist/css/main.css.map : a list of key-value pairs  
dist/index.html  

### variable example : 
```css
css : --primary-color : #272727;
scss : $ primary-color : #272727;
```
### map example
```css
$font-weights: (
“regular”: 400,
“medum”: 500,
“bold”: 700
);
body {
    font-weight: map-get($font-weights, bold);
}
```
### nesting example

The ampersand & always refers to the parent selector when nesting.

**scss**  
```
    .list {
       background-color: white;
       color: #404040;
       &:hover {
           background-color: blue; 
           color: white
       }
       &:before {
            content: "List ";
       }  
       &.active {
            border-left: 3px solid blue;
            color: blue;
       }
   }
```
**css** 
```
   .list {
       background-color: white;
       color: #404040; }
   .list:hover {
       background-color: blue;
       color: white; }
   .list:before {
       content: "List ";
       width: 30px; }
   .list.active {
       border-left: 3px solid blue;
       color: blue; }
```
### function example
```css
@function weight($weight-name){
    @return map-get( $font-weight, $weight-name )
}
body {
    font-weight: weight(bold);
}
```
### mixin example
```css
@mixin flexCenter($direction) {
display: flex;
justify-content: center;
align-items: center;
flex-direction: $direction;
}
.main {
   @include flexCenter(column);
   width: 80%;
   margin: 0 auto;
}
```
### Full Example
[main.scss : source](https://github.com/codeSTACKr/portfolio-sass/tree/master/scss)  
[main.css : destination](https://github.com/codeSTACKr/portfolio-sass/tree/master/dist/css)  
( use @import to include the partial scss files with _ prefix )
### Interpolation

[sass interpolation]( https://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)

Interpolating is the process of **evaluating** an expression or a string containing one or more variables, yielding a result in which the variables are **replaced** with their corresponding values in memory.

Sass is built in **Ruby**, which uses **#{}** for expression substitution.

In Sass, you'd do the following:
```css
$description: "awesome";
@warn "Tuts+ is #{$description}!";
```
**_config.scss**
```css
$colors: (
  "primary": tomato,
  "secondary": hotpink
);
``` 
**_function.scss**
```css
@function color($key) {
  @if not map-has-key($colors, $key) {
    @warn "Key `#{$key}` not found in $colors map.";
  }
  @return map-get($colors, $key);
}
```
**_component.scss**
```css
.el {
  background-color: color(primary);
}
```

### Sass Introduction

[Sass Introduction](https://www.w3schools.com/sass/sass_intro.asp)

### What is Sass? 
•	Sass stands for **Syntactically Awesome Stylesheet**  
•	Sass is **an extension to CSS**  
•	Sass is a CSS **pre-processor**  
•	Sass is completely compatible with all versions of CSS  
•	Sass reduces repetition of CSS and therefore saves time  
•	Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006  
•	Sass is free to download and use  
### Why Use Sass?
Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help. Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.
### Sass Example
```css
/* define variables for the primary colors */
$primary_1: #a2b9bc;
$primary_2: #b2ad7f;
$primary_3: #878f99;
/* use the variables */
.main-header {
  background-color: $primary_1;
}
.menu-left {
  background-color: $primary_2;
}
.menu-right {
  background-color: $primary_3;
}
```
### How Does Sass Work?
A browser does not understand Sass code. Therefore, you will need a Sass pre-processor to convert Sass code into standard CSS. This process is called **transpiling**. So, you need to give a **transpiler (ex: VSCode)** some Sass code and then get some CSS code back.




