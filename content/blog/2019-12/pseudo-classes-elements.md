---
title: "Pseudo-classes and Pseudo-elements"
date: "2019-12-27"
description: A pseudo-class is a selector that selects elements that are in a specific state. Pseudo-elements behave in a similar way, however they act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements. 
category: CSS
---

[Pseudo-classes and Pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

### What is a pseudo-class?

A **pseudo-class** is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer. They tend to **act as if you had applied a class to some part of your document**, often helping you cut down on excess classes in your markup, and giving you more flexible, maintainable code.

### Simple pseudo-class example

Let's look at a simple example. If we wanted to make the first paragraph in an article larger and bold, we could add a class to that paragraph and then add CSS to that class. However, this could be annoying to maintain — what if a new paragraph got added to the top of the document? We'd need to move the class over to the new paragraph. Instead of adding the class, we could use the **:first-child** pseudo-class selector — this will always target the first child element in the article.

```css
article p:first-child {
    font-size: 120%;
    font-weight: bold;
}   
```
```html
<article>
    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillomelon azuki bean garlic.</p>
    <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
</article>
```

All pseudo-classes behave in this same kind of way. They target some bit of your document that is in a certain state, behaving as if you had added a class into your HTML.

### User-action pseudo classes

Some pseudo-classes only apply when the user interacts with the document in some way. These user-action pseudo-classes, sometimes referred to as **dynamic pseudo-classes**, act as if a class had been added to the element when the user interacts with it. Examples include:

- **:hover** — only applies if the user moves their pointer over an element, typically a link.
- **:focus** — only applies if the user focuses the element using **keyboard controls**.

```css
a:link,
a:visited {
    color: rebeccapurple;
    font-weight: bold;
}
a:hover {
    color:hotpink;
}   
```
```html
<p><a href="">Hover over me</a></p>
```

### What is a pseudo-element?

Pseudo-elements behave in a similar way, however they **act as if you had added a whole new HTML element** into the markup, rather than applying a class to existing elements.

For example, if you wanted to select the first line of a paragraph you could wrap it in a **<span\>** element and use an element selector; however, that would fail if the number of words you had wrapped were longer or shorter than the parent element's width. As we tend not to know how many words will fit on a line — as that will change if the screen width or font-size changes — it is impossible to robustly do this by adding HTML.

The **::first-line** pseudo-element selector will do this for you reliably — if the number of words increases and decreases it will still only select the first line. 

### Combining pseudo-classes and pseudo-elements

If you wanted to make the first line of the first paragraph bold you could chain the :first-child and ::first-line selectors together. 

```css
article p:first-child::first-line { 
  font-size: 120%; 
  font-weight: bold; 
}
```

### Generating content with ::before and ::after

There are a couple of special pseudo-elements, which are used along with the **content** property to insert content into your document using CSS.

```css
.box::before {
    content: "This should show before the other content."
}  
```
```html
<p class="box">Content in the box in my HTML page.</p>
```

A more valid use of these pseudo-elements is to insert an icon, for example the little arrow added in the example below, which is a visual indicator that we wouldn't want read out by a screenreader:

```css
.box::after {
    content: " ➥"
}   
```
```html
<p class="box">Content in the box in my HTML page.</p>
```

### Pseudo-elements
| Selector | Description |
| -------- | ----------- |
| ::after |	Matches a stylable element appearing after the originating element's actual content.
| ::before | Matches a stylable element appearing before the originating element's actual content.
| ::first-letter | Matches the first letter of the element.
| ::first-line | Matches the first line of the containing element.
| ::grammar-error | Matches a portion of the document containing a grammar error as flagged by the browser.
| ::selection | Matches the portion of the document that has been selected.
| ::spelling-error | Matches a portion of the document containing a spelling error as flagged by the browser.

### Pseudo-classes
| Selector | Description |
| -------- | ----------- |
| **:active** | Matches when the user activates (for example **clicks on**) an element.
| :any-link | Matches both the :link and :visited states of a link.
| :blank | Matches an <input\> element whose input value is empty.
| :checked | Matches a radio button or checkbox in the selected state.
| :current | Matches the element, or an ancestor of the element, that is currently being displayed.
| :default | Matches the one or more UI elements that are the default among a set of similar elements.
| :dir | Select an element based on its directionality (value of the HTML dir attribute or CSS direction property).
| :disabled | Matches user interface elements that are in an disabled state.
| :empty | Matches an element that has no children except optionally white space.
| :enabled | Matches user interface elements that are in an enabled state.
| :first | In Paged Media, matches the first page.
| :first-child | Matches an element that is first among its siblings.
| :first-of-type | Matches an element which is first of a certain type among its siblings.
| :focus | Matches when an element has focus.
| :focus-visible | Matches when an element has focus and the focus should be visible to the user.
| :focus-within | Matches an element with focus plus an element with a descendent that has focus.
| :future | Matches the elements after the current element.
| **:hover** | Matches when the user hovers over an element.
| :indeterminate | Matches UI elements whose value is in an indeterminate state, usually checkboxes.
| :in-range | Matches an element with a range when its value is in-range.
| :invalid | Matches an element, such as an <input\>, in an invalid state.
| :lang | Matches an element based on language (value of the HTML lang attribute).
| :last-child | Matches an element which is last among its siblings.
| :last-of-type | Matches an element of a certain type that is last among its siblings.
| :left | In Paged Media, matches left-hand pages.
| :link | Matches unvisited links.
| :local-link | Matches links pointing to pages that are in the same site as the current document.
| :is() | Matches any of the selectors in the selector list that is passed in.
| :not | Matches things not matched by selectors that are passed in as a value to this selector.
| :nth-child | Matches elements from a list of siblings — the siblings are matched by a formula of the form an+b (e.g. 2n + 1 would match elements 1, 3, 5, 7, etc. All the odd ones.)
| :nth-of-type | Matches elements from a list of siblings that are of a certain type (e.g. <p\> elements) — the siblings are matched by a formula of the form an+b (e.g. 2n + 1 would match that type of element, numbers 1, 3, 5, 7, etc. All the odd ones.)
| :nth-last-child | Matches elements from a list of siblings, counting backwards from the end. The siblings are matched by a formula of the form an+b (e.g. 2n + 1 would match the last element in the sequence, then two elements before that, then two elements before that, etc. All the odd ones, counting from the end.)
| :nth-last-of-type | Matches elements from a list of siblings that are of a certain type (e.g. <p\> elements), counting backwards from the end. The siblings are matched by a formula of the form an+b (e.g. 2n + 1 would match the last element of that type in the sequence, then two elements before that, then two elements before that, etc. All the odd ones, counting from the end.)
| :only-child | Matches an element that has no siblings.
| :only-of-type | Matches an element that is the only one of its type among its siblings.
| :optional | Matches form elements that are not required.
| :out-of-range | Matches an element with a range when its value is out of range.
| :past | Matches the elements before the current element.
| :placeholder-shown | Matches an input element that is showing placeholder text.
| :playing | Matches an element representing an audio, video, or similar resource that is capable of being “played” or “paused”, when that element is “playing”.
| :paused | Matches an element representing an audio, video, or similar resource that is capable of being “played” or “paused”, when that element is “paused”.
| :read-only | Matches an element if it is not user-alterable.
| :read-write | Matches an element if it is user-alterable.
| :required | Matches form elements that are required.
| :right | In Paged Media, matches right-hand pages.
| :root | Matches an element that is the root of the document.
| :scope | Matches any element that is a scope element.
| :valid | Matches an element such as an <input\> element, in a valid state.
| :target | Matches an element if it is the target of the current URL (i.e. if it has an ID matching the current URL fragment).
| :visited | Matches visited links.

