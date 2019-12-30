---
title: "What is clearfix ?"
date: "2019-12-29"
description: What's happening when we float something with CSS, and how clears work with floats. 
category: CSS
---

[How to Clear Floats](https://www.w3schools.com/howto/howto_css_clearfix.asp)

If an element is taller than the element containing it, and it is floated, it will overflow outside of its container. The new, modern clearfix hack however, is safer to use, and the following code is used for most webpages:
```css
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
```

[Clearfix: A Lesson in Web Development Evolution](https://css-tricks.com/clearfix-a-lesson-in-web-development-evolution/)

[The Clearfix](https://css-tricks.com/snippets/css/clear-fix/) is a CSS hack that solves a persistent bug that occurs **when two floated elements are stacked next to each other, the parent container ends up with a height of 0**, and it can easily wreak havoc on a layout.

All you might be trying to do is position a sidebar to the left of your main content block, but the result would be two elements that overlap and collapse on each other. To complicate things further, the bug is inconsistent across browsers. The clearfix was invented to solve all that.

In January of 2017, Rachel Andrew wrote an article for her blog titled ["The end of the clearfix hack?"](https://www.rachelandrew.co.uk/archives/2017/01/24/the-end-of-the-clearfix-hack/) In it, she describes a way to replace the clearfix hack with a single line of code using a new display mode rule known as **flow-root**.

```css
.container {
  display: flow-root;
}
```

<iframe width="100%" src="https://www.youtube.com/embed/2tC4PIlEz_o" frameborder="0" allowfullscreen></iframe>


**What's happening when we float something with CSS, and how clears work with floats.**

clear options : both, left, right

<iframe width="100%" src="https://www.youtube.com/embed/LrdkRMZhgZg" frameborder="0" allowfullscreen></iframe>