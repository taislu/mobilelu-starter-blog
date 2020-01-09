---
title: "CSS Flexbox Guide"
date: "2020-01-09"
description: Basic concepts of flexbox
category: CSS
---

[Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)  

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

The Flexible Box Module, usually referred to as **flexbox**, was designed as a **one-dimensional layout model**, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. 

When working with flexbox you need to think in terms of two axes — the **main axis** and the **cross axis**. The main axis is defined by the [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) property, and the cross axis runs perpendicular to it.

```css
/* The direction text is laid out in a line */
flex-direction: row;
/* Like <row>, but reversed */
flex-direction: row-reverse;
/* The direction in which lines of text are stacked */
flex-direction: column;
/* Like <column>, but reversed */
flex-direction: column-reverse;
```

If the flex-direction is row and I am working in English, then the start edge of the main axis will be on the left, the end edge on the right.

An area of a document laid out using flexbox is called a **flex container**. To create a flex container, we set the value of the area's container's **display** property to **flex or inline-flex**. As soon as we do this the direct **children** of that container become **flex items**. As with all properties in CSS, some **initial values** are defined, so when creating a flex container all of the contained flex items will behave in the following way.

- Items display in a row (the flex-direction property's default is **row**).  
- The items start from the start edge of the main axis.  
- The items do not stretch on the main dimension, but can shrink.  
- The items will stretch to fill the size of the cross axis.  
- The flex-basis property is set to auto.  
- The flex-wrap property is set to nowrap.  

The result of this is that your items will all **line up in a row**, using the size of the content as their size in the main axis. If there are more items than can fit in the container, they will not wrap but will instead overflow. If some items are taller than others, all items will stretch along the cross axis to fill its full size.

To cause wrapping behaviour add the property [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) with a value of **wrap**. Now, should your items be too large to all display in one line, they will wrap onto another line. 

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;
```

You can combine the two properties flex-direction and flex-wrap into the flex-flow shorthand. The first value specified is flex-direction and the second value is flex-wrap.

```css
.box {
        display: flex;
        flex-flow: row wrap;
}
```

### Alignment, justification and distribution of free space between items

A key feature of flexbox is the ability to align and justify items on the main- and cross-axes, and to distribute space between flex items.

#### align-items

The [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) property will align the items on the **cross axis**. 
```css
/* align-items does not take left and right values */
align-items: stretch; /* flex items stretch to the height of the tallest one by default */ 
align-items: center; /* Pack items around the center */ 
align-items: flex-start; /* Pack flex items from the start */ 
align-items: flex-end; /* Pack flex items from the end */
```

#### justify-content

The [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) property is used to align the items on the main axis. The initial value is **flex-start** which will line the items up at the start edge of the container, but you could also set the value to **flex-end** to line them up at the end, or **center** to line them up in the centre.

```css
justify-content: space-between; /* The first item is flush with the start, the last is flush with the end */
justify-content: space-around;  /* Items have a half-size space on either end */
justify-content: space-evenly;  /* Items have equal space around them */
justify-content: stretch;       /* Stretch 'auto'-sized items to fit the container */
```

