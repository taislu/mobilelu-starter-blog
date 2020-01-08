---
title: "CSS Styling Images"
date: "2020-01-08"
description: how to style images using CSS
category: CSS
---

[CSS Styling Images](https://www.w3schools.com/css/css3_images.asp)

#### Use the border-radius property to create rounded images

**Rounded Image**
```css
img{
    border-radius: 8px;
}
```

**Circled Image**
```css
img{
    border-radius: 50%;
}
```

#### Use the border property to create thumbnail images

**Thumbnail Image**
```css
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
<img src="paris.jpg" alt="Paris">
```

**Thumbnail Image as Link**
```css
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
<a href="paris.jpg">
  <img src="paris.jpg" alt="Paris">
</a>
```

#### Responsive Images

Responsive images will automatically adjust to fit the size of the screen.

```css
img {
  max-width: 100%;
  height: auto;
}
```

#### Center an Image

To center an image, set left and right margin to auto and make it into a block element:

```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
```

#### Polaroid Images / Cards

```css
div.polaroid {
  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {width: 100%}

div.container {
  text-align: center;
  padding: 10px 20px;
}
```

#### Transparent Image

The opacity property can take a value from 0.0 - 1.0. The lower value, the more transparent:

```css
img {
  opacity: 0.5;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}
```

#### Image Text

**Add some text to an image in the top left corner:**
```css
.container {
  position: relative;
}

.topleft {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 18px;
}

img { 
  width: 100%;
  height: auto;
  opacity: 0.3;
}
```

**Center text in image:**
```css
.container {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}

img { 
  width: 100%;
  height: auto;
  opacity: 0.3;
}
```

#### Image Hover Overlay

**Create an overlay effect on hover:**

**Fade in a Box**
```css
.container {
  position: relative;
  width: 50%;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}
.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}
.container:hover .image {
  opacity: 0.3;
}
.container:hover .middle {
  opacity: 1;
}
.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
```

**Slide in Overlay from the Left**
```css
.container {
  position: relative;
  width: 50%;
}
.image {
  display: block;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008CBA;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
}
.container:hover .overlay {
  width: 100%;
}
.text {
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
```

#### Flip an Image
```css
img:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
```

#### Responsive Image Gallery

CSS can be used to create image galleries. This example use media queries to re-arrange the images on different screen sizes. 

```css
.responsive {
  padding: 0 6px;
  float: left;
  width: 24.99999%;
}
@media only screen and (max-width: 700px){
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}
@media only screen and (max-width: 500px){
  .responsive {
    width: 100%;
  }
}
```