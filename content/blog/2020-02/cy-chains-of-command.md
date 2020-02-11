---
title: "Cypress Chains of Commands"
date: "2020-02-10"
description: This is the big secret of Cypress that Commands are Promises.
category: Cypress
---

[Cypress Chains of Commands](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Chains-of-Commands)

It’s very important to understand the mechanism Cypress uses to chain commands together. It manages a **Promise chain** on your behalf, with each command yielding a ‘subject’ to the next command, until the chain ends or an error is encountered. The developer should not need to use Promises directly, but understanding how they work is helpful!

#### Interacting With Elements

Cypress allows you to click on and type into elements on the page by using **.click()** and **.type()** commands with a **cy.get()** or **cy.contains()** command. This is a great example of chaining in action. Let’s see it again:
```
cy.get('textarea.post-body')
  .type('This is an excellent post.')
```
We’re chaining the .type() onto the cy.get(), telling it to type into the subject yielded from the cy.get() command, which will be a DOM element.

Here are even more action commands Cypress provides to interact with your app:   
•	.blur() - Make a focused DOM element blur.   
•	.focus() - Focus on a DOM element.   
•	.clear() - Clear the value of an input or textarea.   
•	.check() - Check checkbox(es) or radio(s).   
•	.uncheck() - Uncheck checkbox(es).   
•	.select() - Select an <option\> within a <select\>.   
•	.dblclick() - Double-click a DOM element.   
•	.rightclick() - Right-click a DOM element.   

These commands ensure some guarantees about what the state of the elements should be prior to performing their actions.

For example, when writing a .click() command, **Cypress ensures that the element is able to be interacted with** (like a real user would). It will automatically wait until the element reaches an “actionable” state by:   
•	Not being hidden   
•	Not being covered   
•	Not being disabled  
•	Not animating  

This also helps prevent flake when interacting with your application in tests. You can usually override this behavior with a force option.  

Cypress provides a simple but powerful algorithm when interacting with elements.

#### Asserting About Elements

Assertions let you do things like ensuring an element is visible or has a particular attribute, CSS class, or state. Assertions are commands that enable you to describe the desired state of your application. **Cypress will automatically wait until your elements reach this state**, or fail the test if the assertions don’t pass. Here’s a quick look at assertions in action:
```
cy.get(':checkbox').should('be.disabled')

cy.get('form').should('have.class', 'form-horizontal')

cy.get('input').should('not.have.value', 'US')
```
In each of these examples, it’s important to note that Cypress will automatically wait until these assertions pass. This prevents you from having to know or care about the precise moment your elements eventually do reach this state.

#### Subject Management

A new Cypress chain always starts with cy.\[command\], where what is yielded by the command establishes what other commands can be called **next** (chained).

Some methods yield null and thus cannot be chained, such as **cy.clearCookies()**.

Some methods, such as cy.get() or cy.contains(), yield a **DOM element**, allowing further commands to be chained onto them (assuming they expect a DOM subject) like .click() or even cy.contains() again.
```
cy.clearCookies()         // Done: 'null' was yielded, no chaining possible

cy.get('.main-container') // Yields an array of matching DOM elements
  .contains('Headlines')  // Yields the first DOM element containing content
  .click()                // Yields same DOM element from previous command
```
Cypress commands do not return their subjects, they **yield** them. Remember: **Cypress commands are asynchronous and get queued for execution at a later time**. During execution, subjects are yielded from one command to the next, and a lot of helpful Cypress code runs between each command to ensure everything is in order.

To work around the need to reference elements, Cypress has a feature known as **aliasing**. Aliasing helps you to store and save element references for future use.

#### Using .then() To Act On A Subject

Want to jump into the command flow and get your hands on the subject directly? No problem, add a .then() to your command chain. When the previous command **resolves**, it will call your callback function with the yielded subject as the first argument.  

If you wish to continue chaining commands after your .then(), you’ll need to specify the subject you want to yield to those commands, which you can achieve with a return value other than null or undefined. Cypress will yield that to the next command for you.
```
cy
  // Find the el with id 'some-link'
  .get('#some-link')

  .then(($myElement) => {
    // ...massage the subject with some arbitrary code

    // grab its href property
    const href = $myElement.prop('href')

    // strip out the 'hash' character and everything after it
    return href.replace(/(#.*)/, '')
  })
  .then((href) => {
    // href is now the new subject
    // which we can work with now
  })
```

#### Using Aliases to Refer to Previous Subjects

Cypress has some added functionality for quickly referring back to past subjects called **Aliases**. It looks something like this:
```
cy
  .get('.my-selector')
  .as('myElement') // sets the alias
  .click()

/* many more actions */

cy
  .get('@myElement') // re-queries the DOM as before (only if necessary)
  .click()
```
This lets us reuse our DOM queries for faster tests when the element is still in the DOM, and it automatically handles re-querying the DOM for us when it is not immediately found in the DOM. **This is particularly helpful when dealing with front end frameworks that do a lot of re-rendering**!

#### Commands Are Asynchronous

It is very important to understand that **Cypress commands don’t do anything at the moment they are invoked, but rather enqueue themselves to be run later**. This is what we mean when we say Cypress commands are asynchronous.
```
it('changes the URL when "awesome" is clicked', function() {
  cy.visit('/my/resource/path') // Nothing happens yet

  cy.get('.awesome-selector')   // Still nothing happening
    .click()                    // Nope, nothing

  cy.url()                      // Nothing to see, yet
    .should('include', '/my/resource/path#awesomeness') // Nada.
})

// Ok, the test function has finished executing...
// We've queued all of these commands and now
// Cypress will begin running them in order!
```

Each Cypress command (and chain of commands) returns immediately, having only been appended to a queue of commands to be executed at a later time. You purposefully cannot do anything useful with the return value from a command. **Commands are enqueued** and managed entirely behind the scenes.

We’ve designed our API this way because the DOM is a highly mutable object that constantly goes stale. For Cypress to prevent flake, and know when to proceed, we manage commands in a highly controlled deterministic way.

#### Why can’t I use async / await?   
If you’re a modern JS programmer you might hear “asynchronous” and think: why can’t I just use async/await instead of learning some proprietary API?

Cypress’s APIs are built very differently from what you’re likely used to: but these design patterns are incredibly intentional. We’ll go into more detail later.

#### Commands Run Serially

After a test function is finished running, Cypress goes to work executing the commands that were enqueued using the cy.* command chains. The test above would cause an execution in this order:  

1.	Visit a URL.   
2.	Find an element by its selector.   
3.	Perform a click action on that element.    
4.	Grab the URL.   
5.	Assert the URL to include a specific string.   

These actions will always happen **serially** (one after the other), never in parallel (at the same time). Why?    
To illustrate this, let’s revisit that list of actions and expose some of the hidden ✨ magic ✨ Cypress does for us at each step:   
1.	Visit a URL   
✨ and wait for the page load event to fire after all external resources have loaded✨   
2.	Find an element by its selector   
✨ and retry until it is found in the DOM ✨   
3.	Perform a click action on that element   
✨ after we wait for the element to reach an actionable state ✨   
4.	Grab the URL and…   
5.	Assert the URL to include a specific string   
✨ and retry until the assertion passes ✨   

As you can see, Cypress does a lot of extra work to ensure the state of the application matches what our commands expect about it. Each command may resolve quickly (so fast you won’t see them in a pending state) but others may take seconds, or even dozens of seconds to resolve.

While most commands time out after a few seconds, other specialized commands that expect particular things to take much longer like **cy.visit()** will naturally wait longer before timing out.

These commands have their own particular timeout values which are documented in our configuration.

Any waiting or retrying that is necessary to ensure a step was successful must complete before the next step begins. If they don’t complete successfully before the timeout is reached, the test will fail.

#### Commands Are Promises

**This is the big secret of Cypress**: we’ve taken our favorite pattern for composing JavaScript code, Promises, and built them right into the fabric of Cypress. Above, when we say we’re enqueuing actions to be taken later, we could restate that as “**adding Promises to a chain of Promises**”.
```
it('changes the URL when "awesome" is clicked', function() {
  cy.visit('/my/resource/path')

  cy.get('.awesome-selector')
    .click()

  cy.url()
    .should('include', '/my/resource/path#awesomeness')
})
```
Cypress is built using Promises that come from [Bluebird](http://bluebirdjs.com/docs/getting-started.html). However, Cypress commands do not return these typical Promise instances. Instead we return what’s called a **Chainer** that acts like a layer sitting on top of the internal Promise instances. For this reason **you cannot ever return or assign anything useful from Cypress commands**.

If you’d like to learn more about handling asynchronous Cypress Commands please read our [Core Concept Guide](https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#Return-Values).

#### Commands Are Not Promises

The Cypress API is not an exact 1:1 implementation of Promises. They have Promise like qualities and yet there are important differences you should be aware of.   
1.	You cannot race or run multiple commands at the same time (in parallel).   
2.	You cannot ‘accidentally’ forget to return or chain a command.   
3.	**You cannot add a .catch error handler to a failed command**.   

There are very specific reasons these limitations are built into the Cypress API.
The whole intention of Cypress (and what makes it very different from other testing tools) is to create consistent, non-flaky tests that perform identically from one run to the next. Making this happen isn’t free - there are some trade-offs we make that may initially seem unfamiliar to developers accustomed to working with Promises.

#### You cannot race or run multiple commands at the same time

Cypress guarantees that it will execute all of its commands deterministically and identically every time they are run.

A lot of Cypress commands **mutate the state of the browser** in some way.   
•	**cy.request()** automatically gets + sets cookies to and from the remote server.   
•	**cy.clearCookies()** clears all of the browser cookies.     
•	**.click()** causes your application to react to click events.   

None of the above commands are idempotent; they all cause side effects. Racing commands is not possible because commands must be run in a controlled, serial manner in order to create consistency. **Because integration and e2e tests primarily mimic the actions of a real user, Cypress models its command execution model after a real user working step by step**.
