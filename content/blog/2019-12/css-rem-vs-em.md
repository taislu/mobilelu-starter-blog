---
title: "CSS Rem vs Em Units"
date: "2019-12-20"
description: According to the W3C spec the definition for one rem unit is equal to the computed value of font-size on the root element. When specified on the font-size property of the root element, the rem units refer to the property’s initial value.
category: CSS
---

[Understanding and Using rem Units in CSS](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)

**1rem** equals the font size of the html element (which for most browsers has a default value of **16px**). The **em** units are relative to the font size of their own element.

Let’s consider the following example, where we want lists to have a font size of **12px**, in the case where the root font size is the default 16px:
```css
html {
font-size: 100%;
}

ul {
font-size: 0.75em;
}
```
If we have a list nested inside another list, the font size of the inner list will be 75% of the size of its parent (in this case 9px).
```css
ul ul {
font-size: 1em;
}
```

With **rem** units, things are a simpler, as all the sizes are referenced from the root font size, there is no more need to cover the nesting cases in separate declarations.
```css
html {
font-size: 100%;
}

ul {
font-size: 0.75rem;
}
```





