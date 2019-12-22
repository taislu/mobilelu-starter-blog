---
title: "CSS display property"
date: "2019-12-22"
description: The display property specifies the display behavior (the type of rendering box) of an element.
category: CSS
---

[CSS Layout - The display Property](https://www.w3schools.com/css/css_display_visibility.asp)

The display property is the most important CSS property for controlling layout. Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is **block or inline**.

### Block-level Elements
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

Examples of block-level elements:

<div\>  
<h1\> - <h6\>  
<p\>  
<form\>  
<header\>  
<footer\>  
<section\>  

### Inline Elements
An inline element does not start on a new line and only takes up as much width as necessary.

Examples of inline elements:

<span\>  
<a\>  
<img\>  

### Display: none
display: none; is commonly used with JavaScript to **hide** and show elements without deleting and recreating them. 

Hiding an element can be done by setting the display property to none. The element will be hidden, and the page will be displayed as if the element is not there:
```css
h1.hidden {
  display: none;
}
```

**visibility:hidden**; also hides an element.
However, the element will still take up the same space as before. 


[CSS display property](https://www.w3schools.com/cssref/pr_class_display.asp)
### CSS Syntax

**display: Value;**

| Value | Description |
| ----- | ----------- |
| inline | Displays an element as an inline element (like <span\>). **Any height and width properties will have no effect** |
| block | Displays an element as a block element (like <p\>). It starts on a new line, and **takes up the whole width** |
| contents | Makes the container **disappear**, making the child elements children of the element the next level up in the DOM
| flex | Displays an element as a **block-level** flex container
| grid | Displays an element as a **block-level** grid container
| inline-block | Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values
| inline-flex | Displays an element as an inline-level flex container
| inline-grid | Displays an element as an inline-level grid container
| inline-table | The element is displayed as an inline-level table
| list-item | Let the element behave like a <li\> element
| **none** | The element is completely removed


