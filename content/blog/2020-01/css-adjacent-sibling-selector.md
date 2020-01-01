---
title: "The Adjacent Sibling (+) Selector"
date: "2020-01-01"
description: The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.
category: CSS
---

[Adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)

The adjacent sibling combinator (+) separates two selectors and **matches the second element** only if it immediately follows the first element, and both are children of the same parent element.

```css
/* Paragraphs that come immediately after any image */
img + p {
  font-style: bold;
}
```

[Fine Use for the Adjacent Sibling (“+”) Selector](https://css-tricks.com/fine-use-for-the-adjacent-sibling-selector/)


