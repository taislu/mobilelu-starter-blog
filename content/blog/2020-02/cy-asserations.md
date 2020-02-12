---
title: "Cypress Asserations"
date: "2020-02-11"
description: What makes Cypress unique from other testing tools is that commands automatically retry their assertions. 
category: Cypress
---

[Cypress Assertions](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Assertions)

**Assertions** describe the **desired state** of your elements, your objects, and your application.

What makes Cypress unique from other testing tools is that **commands automatically retry their assertions**. In fact, they will look “downstream” at what you’re expressing and modify their behavior to make your assertions pass.

You should think of assertions as guards. Use your guards to describe what your application should look like, and Cypress will automatically block, wait, and retry until it reaches that state.

### Asserting in English

Let’s look at how you’d describe an assertion in english:   
After clicking on this <button\>, I expect its class to eventually be active.

To express this in Cypress you’d write:  
```
cy.get('button').click().should('have.class', 'active')
```

Here’s another example.   
After making an HTTP request to my server, I expect the response body to equal {name: 'Jane'}  

To express this with an assertion you’d write:
```
cy.request('/users/1').its('body').should('deep.eq', { name: 'Jane' })
```

### When To Assert?

Despite the dozens of assertions Cypress makes available to you, sometimes the best test may make no assertions at all! How can this be? Aren’t assertions a basic part of testing?  
Consider this example:   
```
cy.visit('/home')

cy.get('.main-menu')
  .contains('New Project')
  .click()

cy.get('.title')
  .type('My Awesome Project')

cy.get('form')
  .submit()
```
Without a single explicit assertion, there are dozens of ways this test can fail! Here’s a few:   
•	The initial **cy.visit()** could respond with something other than success.   
•	Any of the **cy.get()** commands could fail to find their elements in the DOM.   
•	The element we want to **.click()** on could be covered by another element.   
•	The input we want to **.type()** into could be disabled.   
•	Form submission could result in a non-success status code.  
•	The in-page JS (the application under test) could throw an error.   

With Cypress, you don’t have to assert to have a useful test. Even without assertions, a few lines of Cypress can ensure thousands of lines of code are working properly across the client and server!
This is because many commands have a **built in Default Assertion** which offer you a high level of guarantee.   

### Default Assertions

Many commands have a default, built-in assertion, or rather have requirements that may cause it to fail without needing an explicit assertion you’ve added.   
For instance:   
•	**cy.visit()** expects the page to send text/html content with a **200 status code**.   
•	**cy.request()** expects the remote server to exist and provide a response.  
•	**cy.contains()** expects the element with content to eventually exist in the DOM.   
•	**cy.get()** expects the element to eventually exist in the DOM.   
•	**.find()** also expects the element to eventually exist in the DOM.  
•	**.type()** expects the element to eventually be in a typeable state.   
•	**.click()** expects the element to eventually be in an actionable state.  
•	**.its()** expects to eventually find a **property** on the current subject.  

Certain commands may have a specific requirement that causes them to immediately fail without retrying: such as **cy.request()**.  

Others, such as **DOM based commands will automatically retry** and wait for their corresponding elements to exist before failing.

Even more - **action commands will automatically wait for their element to reach an actionable state** before failing.

All DOM based commands automatically wait for their elements to exist in the DOM.
You don’t need to write .should('exist') after a DOM based command, **unless you chain extra .should() assertions**.

### Negative DOM assertions

If you chain any .should() command, the default .should('exist') is not asserted. This does not matter for most positive assertions, such as .should('have.class'), because those imply existence in the first place, but if you chain negative assertions ,such as .should('not.have.class'), **they will pass even if the DOM element doesn’t exist**:  

cy.get('.does-not-exist').should('not.be.visible')         
cy.get('.does-not-exist').should('not.be.visible') // passes    
cy.get('.does-not-exist').should('not.have.descendants') // passes   

This also applies to custom assertions such as when passing a callback:   
```
// passes, provided the callback itself passes 
cy.get('.does-not-exist').should(($element) => { expect($element.find('input')).to.not.exist })
```
There’s an open discussion about this behavior.

These rules are pretty intuitive, and most commands give you the flexibility to override or bypass the default ways they can fail, typically by passing a {force: true} option.

**Example #1:** Existence and Actionability    
```
cy
  // there is a default assertion that this
  // button must exist in the DOM before proceeding
  .get('button')

  // before issuing the click, this button must be "actionable"
  // it cannot be disabled, covered, or hidden from view.
  .click()
```
Cypress will automatically wait for elements to pass their default assertions. Like with the explicit assertions you’ve added, all of these assertions share the same timeout values.

**Example #2:** Reversing the Default Assertion
Most of the time, when querying for elements, you expect them to eventually exist. But sometimes you wish to wait until they don’t exist.

All you have to do is add that assertion and Cypress will reverse its rules waiting for elements to exist.
```
// now Cypress will wait until this
// <button> is not in the DOM after the click
cy.get('button.close').click().should('not.exist')

// and now make sure this #modal does not exist in the DOM
// and automatically wait until it's gone!
cy.get('#modal').should('not.exist')
```
By adding .should('not.exist') to any DOM command, Cypress will reverse its default assertion and automatically wait until the element does not exist.   

**Example #3:** Other Default Assertions   
Other commands have other default assertions not related to the DOM.
For instance, .its() requires that the property you’re asking about exists on the object.
```
// create an empty object
const obj = {}

// set the 'foo' property after 1 second
setTimeout(() => {
  obj.foo = 'bar'
}, 1000)

// .its() will wait until the 'foo' property is on the object
cy.wrap(obj).its('foo')
```
#### List of Assertions

Cypress bundles **Chai, Chai-jQuery, and Sinon-Chai** to provide **built-in assertions**. You can see a comprehensive list of them in the list of assertions reference. You can also write your own assertions as **Chai plugins** and use them in Cypress.

### Writing Assertions
There are two ways to write assertions in Cypress:  
1.	**Implicit** Subjects: Using .should() or .and().  
2.	**Explicit** Subjects: Using expect.   

#### Implicit Subjects
Using **.should() or .and()** commands is the **preferred way** of making assertions in Cypress. These are typical Cypress commands, which means they apply to the currently yielded subject in the command chain.
```
// the implicit subject here is the first <tr>
// this asserts that the <tr> has an .active class
cy.get('tbody tr:first').should('have.class', 'active')
```
You can chain multiple assertions together using .and(), which is another name for .should() that makes things more readable:
```
cy.get('#header a')
  .should('have.class', 'active')
  .and('have.attr', 'href', '/users')
```
Because .should('have.class') does not change the subject, .and('have.attr') is executed against the same element. This is handy when you need to assert multiple things against a single subject quickly.

If we wrote this assertion in the explicit form “the long way”, it would look like this:  
```
cy.get('tbody tr:first').should(($tr) => {
  expect($tr).to.have.class('active')
  expect($tr).to.have.attr('href', '/users')
})
```
The implicit form is much shorter! So when would you want to use the explicit form?   
Typically when you want to:   
•	Assert multiple things about the same subject   
•	Massage the subject in some way prior to making the assertion  

#### Explicit Subjects
Using expect allows you to pass in a specific subject and make an assertion about it. This is probably how you’re used to seeing assertions written in **unit tests**:
```
// the explicit subject here is the boolean: true
expect(true).to.be.true
```
Did you know you can write Unit Tests in Cypress?   
Check out our example recipes for [unit testing](https://docs.cypress.io/examples/examples/recipes.html#Fundamentals) and [unit testing React components](https://docs.cypress.io/examples/examples/recipes.html#Unit-Testing).   

Explicit assertions are great when you want to:  
•	Perform custom logic prior to making the assertion.   
•	Make multiple assertions against the same subject.   

#### Complex Assertions
The example below is a use case where we are asserting across multiple elements. Using a **.should() callback function** is a great way to query **from a parent into multiple children elements and assert something about their state**.

Doing so enables you to block and guard Cypress by ensuring the state of descendants matches what you expect without needing to query them individually with regular Cypress DOM commands.
```
cy
  .get('p')
  .should(($p) => {
    // massage our subject from a DOM element
    // into an array of texts from all of the p's
    let texts = $p.map((el, i) => {
      return Cypress.$(el).text()
    })

    // jQuery map returns jQuery object
    // and .get() converts this to an array
    texts = texts.get()

    // array should have length of 3
    expect(texts).to.have.length(3)

    // with this specific content
    expect(texts).to.deep.eq([
      'Some text from first p',
      'More text from second p',
      'And even more text from third p'
    ])
  })
```
#### Make sure .should() is safe
When using a callback function with .should(), be sure that the entire function can be executed multiple times without side effects. Cypress applies its retry logic to these functions: if there’s a failure, it will repeatedly rerun the assertions until the timeout is reached. That means your code should be **retry-safe**. The technical term for this means your code must be idempotent.
