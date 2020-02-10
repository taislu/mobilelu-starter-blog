---
title: "Cypress Querying The Dom"
date: "2020-02-09"
description: Cypress leverages jQuery’s powerful selector engine to help make tests familiar and readable for modern web developers
category: Cypress
---

[Introduction to Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Can-Be-Simple-Sometimes)

Simplicity is all about getting more done with less typing. Let’s look at an example:
```
describe('Post Resource', function() {
  it('Creating a New Post', function() {
    cy.visit('/posts/new')     // 1.

    cy.get('input.post-title') // 2.
      .type('My First Post')   // 3.

    cy.get('input.post-body')  // 4.
      .type('Hello, world!')   // 5.

    cy.contains('Submit')      // 6.
      .click()                 // 7.

    cy.url()                   // 8.
      .should('include', '/posts/my-first-post')

    cy.get('h1')               // 9.
      .should('contain', 'My First Post')
  })
})
```
Can you read this? If you did, it might sound something like this:

1.	Visit the page at /posts/new.
2.	Find the <input\> with **class** post-title.
3.	Type “My First Post” into it.
4.	Find the <input\> with **class** post-body.
5.	Type “Hello, world!” into it.
6.	Find the element containing the **text** Submit.
7.	Click it.
8.	Grab the browser URL, ensure it includes /posts/my-first-post.
9.	Find the h1 tag, ensure it contains the text “My First Post”.

[Querying Elements](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Querying-Elements)

### Cypress is Like jQuery

If you’ve used **jQuery** before, you may be used to querying for elements like this:
```
$('.my-selector')
```
In **Cypress**, querying elements is the same:
```
cy.get('.my-selector')
```

In fact, Cypress bundles jQuery and exposes many of its DOM traversal methods to you so you can work with complex HTML structures with ease using APIs you’re already familiar with.
```
// Each method is equivalent to its jQuery counterpart. Use what you know!
cy.get('#main-content')
  .find('.article')
  .children('img[src^="/static"]')
  .first()
```
Accessing the DOM elements returned from the query works differently, however:
```
// This is fine, jQuery returns the element synchronously.
const $jqElement = $('.element')

// This will not work! Cypress does not return the element synchronously.
const $cyElement = cy.get('.element')
```
### Cypress is Not Like jQuery

Question: What happens when jQuery can’t find any matching DOM elements from its selector?   
Answer: Oops! It returns an empty jQuery collection. We’ve got a real object to work with, but it doesn’t contain the element we wanted. So we start adding conditional checks and retrying our queries manually.   
```
// $() returns immediately with an empty collection.
const $myElement = $('.element').first()

// Leads to ugly conditional checks
// and worse - flaky tests!
if ($myElement.length) {
  doSomething($myElement)
}
```
Question: What happens when Cypress can’t find any matching DOM elements from its selector?   
Answer: No big deal! **Cypress automatically retries the query until** either:   

1. **The element is found**
```
cy
  // cy.get() looks for '#element', repeating the query until...
  .get('#element')

  // ...it finds the element!
  // You can now work with it by using .then
  .then(($myElement) => {
    doSomething($myElement)
  })
```
2. **A set timeout is reached**
```
cy
  // cy.get() looks for '#element-does-not-exist', repeating the query until...
  // ...it doesn't find the element before its timeout.
  // Cypress halts and fails the test.
  .get('#element-does-not-exist')

  // ...this code is never run...
  .then(($myElement) => {
    doSomething($myElement)
  })
```
This makes Cypress robust and immune to dozens of common problems that occur in other testing tools. **Consider all the circumstances that could cause querying a DOM element to fail:**   
•	The DOM has not loaded yet.   
•	Your framework hasn’t finished bootstrapping.   
•	An XHR request hasn’t responded.   
•	An animation hasn’t completed.   
•	and on and on…   

Cypress wraps all DOM queries with **robust retry-and-timeout logic** that better suits how real web apps work. We trade a minor change in how we find DOM elements for a major stability upgrade to all of our tests. Banishing flake for good!

In Cypress, when you want to interact with a DOM element directly, call **.then()** with a **callback function** that receives the element as its first argument. When you want to skip the retry-and-timeout functionality entirely and perform traditional synchronous work, use [Cypress.$](https://docs.cypress.io/api/utilities/$.html#Syntax).

**Cypress automatically includes jQuery and exposes it as Cypress.$.**

### Querying by Text Content

Another way to locate things – a more human way – is to look them up by their **content**, by what the user would see on the page. For this, there’s the handy **cy.contains()** command, for example:    
```
// Find an element in the document containing the text 'New Post'
cy.contains('New Post')

// Find an element within '.main' containing the text 'New Post'
cy.get('.main').contains('New Post')
```
This is helpful when writing tests from the perspective of a user interacting with your app. They only know that they want to click the button labeled “Submit”. They have no idea that it has a type attribute of submit, or a CSS class of my-submit-button.

### When Elements Are Missing

As we showed above, Cypress anticipates the **asynchronous** nature of web applications and doesn’t fail immediately the first time an element is not found. Instead, Cypress gives your app a window of time to finish whatever it may be doing!   

This is known as a timeout, and most commands can be customized with specific timeout periods (**the default timeout is 4 seconds**). These Commands will list a timeout option in their API documentation, detailing how to set the number of milliseconds you want to continue to try finding the element.
```
// Give this element 10 seconds to appear
cy.get('.my-slow-selector', { timeout: 10000 })
```
You can also set the timeout globally via the [cypress.json configuration setting: defaultCommandTimeout](https://docs.cypress.io/guides/references/configuration.html#Options).

To match the behavior of web applications, **Cypress is asynchronous and relies on timeouts to know when to stop waiting** on an app to get into the expected state. **Timeouts can be configured globally, or on a per-command basis**.

#### Timeouts and Performance    
There is a performance tradeoff here: tests that have longer timeout periods take longer to fail. Commands always proceed as soon as their expected criteria is met, so working tests will be performed as fast as your application allows. **A test that fails due to timeout will consume the entire timeout period**, by design. This means that while you may want to increase your timeout period to suit specific parts of your app, you don’t want to make it “extra long, just in case”.
