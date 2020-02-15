---
title: "Cypress Contains command examples"
date: "2020-02-14"
description: Get the DOM element containing the text. DOM elements can contain more than the desired text and still match.
category: Cypress
---

[Cypress Contains command examples](https://docs.cypress.io/api/commands/contains.html#Syntax)

Get the **DOM element** containing the text. DOM elements can contain more than the desired text and still match.

Yield element in .nav containing 'About'
```
cy.get('.nav').contains('About')  
```

Yield first element in document containing 'Hello'
```
cy.contains('Hello')       
```       

#### Find the first element containing some text
```html
<ul>
  <li>apples</li>
  <li>oranges</li>
  <li>bananas</li>
</ul>
```
yields <li\>apples</li\>
```
cy.contains('apples')
```

#### Find the input\[type='submit'\] by value    
Get the form element and search in its descendants for the content “submit the form!”
```html
<div id="main">
  <form>
    <div>
      <label>name</label>
      <input name="name" />
    </div>
    <div>
      <label>age</label>
      <input name="age" />
    </div>
    <input type="submit" value="submit the form!" />
  </form>
</div>
```
yields **input\[type='submit'\] element** then clicks it
```
cy.get('form').contains('submit the form!').click()
```

#### Find the first element containing a number
Even though the <span> is the deepest element that contains a “4”, Cypress automatically yields <button\> elements over spans because of its **preferred element order**.
```html
<button class="btn btn-primary" type="button">
  Messages <span class="badge">4</span>
</button>
```
yields <button\>
```
cy.contains(4)
```

#### Find the first element with text matching the regular expression
```html
<ul>
  <li>apples</li>
  <li>oranges</li>
  <li>bananas</li>
</ul>
```
// yields <li\>bananas</li\>
```
cy.contains(/^b\w+/)
```

[JavaScript Regular Expressions](https://www.taislu.com/2019-12/javascript-regular-expressions/)    
^b : matches beginning, starts with b   
\w+ : matches any characters   

#### Specify a selector to return a specific element
Technically the <html\>, <body\>, <ul\>, and first <li\> in the example below all contain “apples”.
Normally Cypress would return the first <li\> since that is the deepest element that contains “apples”.
To override the element that is yielded we can pass ‘ul’ as the selector.
```html
<html>
  <body>
    <ul>
      <li>apples</li>
      <li>oranges</li>
      <li>bananas</li>
    </ul>
  </body>
</html>
```
yields <ul\>...</ul\>
```
cy.contains('ul', 'apples')
```

#### Keep the form as the subject
Here’s an example that uses the selector to ensure that the <form\> remains the subject for future chaining.
```html
<form>
  <div>
    <label>name</label>
    <input name="name" />
  </div>
  <button type="submit">Proceed</button>
</form>
```
```
cy.get('form')                  // yields <form>...</form>
  .contains('form', 'Proceed')  // yields <form>...</form>
  .submit()                     // yields <form>...</form>
```
Without the explicit selector the subject would change to be the <button\>. Using the explicit selector ensures that chained commands will have the <form\> as the subject.

#### Case Sensitivity
Here’s an example using the **matchCase option** to **ignore case sensitivity**.
```html
<div>Capital Sentence</div>
```
```
cy.get('div').contains('capital sentence') // fail
cy.get('div').contains('capital sentence', { matchCase: false }) // pass
```

### Scopes
.contains() acts differently whether it’s starting a series of commands or being chained off an existing series.

#### When starting a series of commands:

This queries the **entire document** for the content.
```
cy.contains('Log In')
```

#### When chained to an existing series of commands
This will query **inside** of the <#checkout-container> element.
```
cy.get('#checkout-container').contains('Buy Now')
```

#### Be wary of chaining multiple contains
Let’s imagine a scenario where you click a button to delete a user and a dialog appears asking you to confirm this deletion.

This doesn't work as intended
```
cy.contains('Delete User').click().contains('Yes, Delete!').click()
```

Because the second .contains() is chained off of a command that yielded the <button\>, Cypress will look inside of the <button\> for the new content.

In other words, Cypress will look inside of the <button\> containing “Delete User” for the content: “Yes, Delete!”, which is not what we intended.

What you want to do is **call cy again**, which automatically **creates a new chain** scoped to the document.
```
cy.contains('Delete User').click()
cy.contains('Yes, Delete!').click()
```

### Single Element
Only the first matched element will be returned
```html
<ul id="header">
  <li>Welcome, Jane Lane</li>
</ul>
<div id="main">
  <span>These users have 10 connections with Jane Lane</span>
  <ul>
    <li>Jamal</li>
    <li>Patricia</li>
  </ul>
</div>
```
The below example will return the <li\> in the #header since that is the first element that contains the text “Jane Lane”.   
yields **#header li**
```
cy.contains('Jane Lane')
```

If you wanted to select the <span\> instead, you could narrow the elements yielded before the .contains().   
yields <span\>
```
cy.get('#main').contains('Jane Lane')
```

### Preferences
#### Element preference order
.contains() defaults to preferring elements higher in the tree when they are:     
•	input\[type='submit']   
•	button    
•	a   
•	label    

Cypress will ignore this element preference order if you pass a selector argument to .contains().

#### Favor of <button\> over other deeper elements
Even though the <span\> is the deepest element that contains “Search”, Cypress yields <button\> elements over spans.
```html
<form>
  <button>
    <i class="fa fa-search"></i>
    <span>Search</span>
  </button>
</form>
```
yields <button\>
```
cy.contains('Search').children('i').should('have.class', 'fa-search')
```

#### Favor of <a\> over other deeper elements
Even though the <span\> is the deepest element that contains “Sign Out”, Cypress yields anchor elements over spans.
```html
<nav>
  <a href="/users">
    <span>Users</span>
  </a>
  <a href="/signout">
    <span>Sign Out</span>
  </a>
</nav>
```
yields <a\>
```
cy.get('nav').contains('Sign Out').should('have.attr', 'href', '/signout')
```

#### Favor of <label\> over other deeper elements
Even though the <span\> is the deepest element that contains “Age”, Cypress yields <label\> elements over <span\>.
```html
<form>
  <label>
    <span>Name:</span>
    <input name="name" />
  </label>
  <label>
    <span>Age:</span>
    <input name="age" />
  </label>
</form>
```
yields label
```
cy.contains('Age').find('input').type('29')
```
