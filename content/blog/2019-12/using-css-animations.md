---
title: "Using CSS Animations"
date: "2019-12-26"
description: CSS animations make it possible to animate transitions from one CSS style configuration to another.
category: CSS
---

[Using CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components, a **style** describing the CSS animation and a set of **keyframes** that indicate the start and end states of the animation’s style, as well as possible intermediate waypoints.

### Configuring the animation

To create a CSS animation sequence, you style the element you want to animate with the **animation property** or its sub-properties. This lets you configure the timing, duration, and other details of how the animation sequence should progress. This does not configure the actual appearance of the animation, which is done using the **@keyframes** at-rule as described in Defining the animation sequence using keyframes below.

The sub-properties of the animation property are:

**animation-name**  
Specifies the name of the @keyframes at-rule describing the animation’s keyframes.  

**animation-duration**  
Configures the length of time that an animation should take to complete one cycle.

**animation-timing-function**  
Configures the timing of the animation; that is, how the animation transitions through keyframes, by establishing acceleration curves.

**animation-delay**  
Configures the delay between the time the element is loaded and the beginning of the animation sequence.

**animation-iteration-count**  
Configures the number of times the animation should repeat; you can specify infinite to repeat the animation indefinitely.

**animation-direction**  
Configures whether or not the animation should alternate direction on each run through the sequence or reset to the start point and repeat itself.

**animation-fill-mode**  
Configures what values are applied by the animation before and after it is executing.

**animation-play-state**  
Lets you pause and resume the animation sequence.

### Defining the animation sequence using keyframes

Once you’ve configured the animation’s timing, you need to define the appearance of the animation. This is done by establishing two or more keyframes using the **@keyframes** at-rule. **Each keyframe describes how the animated element should render at a given time during the animation sequence**.

### Making text slide across the browser window

Animations like this can cause the page to become wider than the browser window. To avoid this problem put the element to be animated in a container, and set **overflow:hidden** on the container.

This simple example styles the <p> element so that the text slides in from off the right edge of the browser window.

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### Adding another keyframe

Let’s say we want the header’s font size to increase as it moves from right to left for a while, then to decrease back to its original size. 

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }
  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### Making it repeat

To make the animation repeat itself, simply use the **animation-iteration-count** property to indicate how many times to repeat the animation. In this case, let’s use infinite to have the animation repeat indefinitely:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
```

### Making it move back and forth

To move back and forth across the screen: That’s easily accomplished by setting **animation-direction to alternate**.

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

### Using animation shorthand

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

Could be replaced by

```css
animation: 3s infinite alternate slidein;
```

[CSS Animation Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

### Example : Cylon Eye

```html
<div class="view_port">
  <div class="polling_message">
    Listening for dispatches
  </div>
  <div class="cylon_eye"></div>
</div>
```

```css
.view_port {
  background-color: black;
  height: 25px;
  width: 100%;
  overflow: hidden;
}
.polling_message {
  color: white;
  float: left;
  margin-right: 2%;
}
.cylon_eye {
  background-color: red;
  background-image: linear-gradient(to right,
      rgba(0, 0, 0, .9) 25%,
      rgba(0, 0, 0, .1) 50%,
      rgba(0, 0, 0, .9) 75%);
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
          animation: 4s linear 0s infinite alternate move_eye;
}
@-webkit-keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
        @keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
```