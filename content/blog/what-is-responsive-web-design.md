---
title: "What is Responsive Web Design ?"
date: "2019-11-25"
description: Web pages can be viewed using many different devices including desktops, tablets, and phones. Your web page should look good, and be easy to use, regardless of the device.
category: CSS
---

**Responsive web design** makes your web pages look good on all devices, uses only HTML and CSS, and is not a program or a JavaScript.

<a href="https://www.w3schools.com/css/css_rwd_intro.asp"
     target="_blank">Source : CSS Responsive Web Design Introduction</a>

It is called **responsive web design** when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen.

**What is The Viewport?**

The viewport is the user's visible area of a web page.

The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, **browsers** on those devices scaled down the entire web page to fit the screen.

HTML5 introduced a method to let web designers take control over the viewport, through the <**meta**> tag.

```bash
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**What is a Grid-View?**

Many web pages are based on a [grid-view](https://www.w3schools.com/css/css_rwd_grid.asp), which means that the page is divided into columns. Using a grid-view is very helpful when designing web pages. It makes it easier to place elements on the page. A responsive grid-view often has 12 columns, and has a total width of 100%, and will shrink and expand as you resize the browser window.

**What is a Media Query?**

Media query is a CSS technique introduced in CSS3.

It uses the **@media** rule to include a block of CSS properties only if a certain condition is true.

Example : 
If the browser window is 600px or smaller, the background color will be lightblue:
```bash
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

**Always Design for Mobile First**

Mobile First means designing for mobile before designing for desktop or any other device (This will make the page display faster on smaller devices).

Instead of changing styles when the width gets smaller than 768px, we should change the design when the width gets larger than **768px**. This will make our design Mobile First.

**Typical Device Breakpoints**

There are tons of screens and devices with different heights and widths, so it is hard to create an exact breakpoint for each device. To keep things simple you could target five groups:

```bash
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

**Orientation: Portrait / Landscape**

Media queries can also be used to change layout of a page depending on the orientation of the browser.

You can have a set of CSS properties that will only apply when the browser window is wider than its height, a so called "Landscape" orientation:

Example : 
The web page will have a lightblue background if the **orientation** is in landscape mode:
```bash
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

**Using The width Property**

If the **width** property is set to a percentage and the height is set to "auto", the image will be responsive and scale up and down.

```bash
img {
  width: 100%;
  height: auto;
}
```

**Using The max-width Property**

If the **max-width** property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size.

```bash
img {
  max-width: 100%;
  height: auto;
}
```

**Background Images**

Here we will show three different methods:

1. If the **background-size** property is set to "**contain**", the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio (the proportional relationship between the image's width and height)
```bash
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid red;
}
```

2. If the **background-size** property is set to "**100% 100%**", the background image will stretch to cover the entire content area
```bash
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 1px solid red;
}
```

3. If the **background-size** property is set to "**cover**", the background image will scale to cover the entire content area. Notice that the "cover" value keeps the aspect ratio, and some part of the background image may be clipped
```bash
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red;
}
```
