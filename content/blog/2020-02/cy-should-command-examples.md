---
title: "Cypress Should command examples"
date: "2020-02-17"
description: Cypress assertions are automatically retried until they pass or time out.
category: Cypress
---

[Cypress Should command examples]( https://docs.cypress.io/api/commands/should.html#Syntax)

Create an assertion. **Assertions are automatically retried until they pass or time out**.
```
cy.get('.error').should('be.empty')                    // Assert that '.error' is empty
cy.contains('Login').should('be.visible')              // Assert that el is visible
cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar') // Assert the 'foo' property equals 'bar'
```
### Yields
In most cases, .should() yields the same subject it was given from the previous command.
```
cy
  .get('nav')                       // yields <nav>
  .should('be.visible')             // yields <nav>
```
However, some chainers change the subject. In the example below, the second .should() yields the string sans-serif because the chainer have.css, 'font-family' changes the subject.
```
cy
  .get('nav')                          // yields <nav>
  .should('be.visible')                // yields <nav>
  .should('have.css', 'font-family')   // yields 'sans-serif'
  .and('match', /serif/)               // yields 'sans-serif'
```
### Examples

#### Chainers
Assert the checkbox is disabled
```
cy.get(':checkbox').should('be.disabled')
```
The current DOM element is yielded
```
cy.get('option:first').should('be.selected').then(($option) => {
  // $option is yielded
})
```
#### Value

Assert the class is ‘form-horizontal’
```
cy.get('form').should('have.class', 'form-horizontal')
```
Assert the value is not ‘Jane’
```
cy.get('input').should('not.have.value', 'Jane')
```
The current subject is yielded
```
cy.get('button').should('have.id', 'new-user').then(($button) => {
  // $button is yielded
})
```
#### Method and Value

Assert the href is equal to ‘/users’
```
// have.attr comes from chai-jquery
cy.get('#header a').should('have.attr', 'href', '/users')
```
#### Focus
Assert an input is focused after button click
```
cy.get('#btn-focuses-input').click()
cy.get('#input-receives-focus').should('have.focus') // equivalent 
```
#### Function
Passing a function to .should() enables you to make **multiple assertions** on the yielded subject. This also gives you the opportunity to massage what you’d like to assert on. Be sure not to include any code that has side effects in your callback function. **The callback function will be retried over and over again** until no assertions within it throw.

Verify length, content, and classes from multiple <p>
```html
<div>
  <p class="text-primary">Hello World</p>
  <p class="text-danger">You have an error</p>
  <p class="text-default">Try again later</p>
</div>
```
```
cy
  .get('p')
  .should(($p) => {
    // should have found 3 elements
    expect($p).to.have.length(3)

    // make sure the first contains some text content
    expect($p.first()).to.contain('Hello World')

    // use jquery's map to grab all of their classes
    // jquery's map returns a new jquery object
    const classes = $p.map((i, el) => {
      return Cypress.$(el).attr('class')
    })

    // call classes.get() to make this a plain array
    expect(classes.get()).to.deep.eq([
      'text-primary',
      'text-danger',
      'text-default'
    ])
  })
```
Any value returned from a .should() callback function will be **ignored**. The original subject will be yielded to the next command.
```
cy
  .get('p')
  .should(($p) => {
    expect($p).to.have.length(3)

    return 'foo'
  })
  .then(($p) => {
    // the argument $p will be the 3 elements, not "foo"
  })
```
#### Assert class name contains heading-
```html
<div class="docs-header">
  <div class="main-abc123 heading-xyz987">Introduction</div>
</div>
```
```
cy.get('.docs-header')
  .find('div')
  // .should(cb) callback function will be retried
  .should(($div) => {
    expect($div).to.have.length(1)

    const className = $div[0].className

    expect(className).to.match(/heading-/)
  })
  // .then(cb) callback is not retried,
  // it either passes or fails
  .then(($div) => {
    expect($div).to.have.text('Introduction')
  })
```
You can even throw your own errors from the callback function.
```
cy.get('.docs-header')
  .find('div')
  .should(($div) => {
    if ($div.length !== 1) {
      // you can throw your own errors
      throw new Error('Did not find 1 element')
    }

    const className = $div[0].className

    if (!className.match(/heading-/)) {
      throw new Error(`No class "heading-" in ${className}`)
    }
  })
```
#### Assert text contents of 3 elements
Example below first asserts that there are 3 elements, and then checks the text contents of each one.
```html
<ul class="connectors-list">
  <li>Walk the dog</li>
  <li>Feed the cat</li>
  <li>Write JavaScript</li>
</ul>
```
```
cy.get('.connectors-list > li').should(($lis) => {
  expect($lis).to.have.length(3)
  expect($lis.eq(0)).to.contain('Walk the dog')
  expect($lis.eq(1)).to.contain('Feed the cat')
  expect($lis.eq(2)).to.contain('Write JavaScript')
})
```

For clarity you can pass a string message as a **second argument** to any expect assertion, see [Chai#expect](https://www.chaijs.com/guide/styles/#expect).
```
cy.get('.connectors-list > li').should(($lis) => {
  expect($lis, '3 items').to.have.length(3)
  expect($lis.eq(0), 'first item').to.contain('Walk the dog')
  expect($lis.eq(1), 'second item').to.contain('Feed the cat')
  expect($lis.eq(2), 'third item').to.contain('Write JavaScript')
})
```
These string messages will be shown in the **Command Log** giving each assertion more context.

#### Compare text values of two elements
The example below gets the text contained within one element and saves it in a **closure** variable. Then the test gets the text in another element and asserts that the two text values are the same after normalizing.
```html
<div class="company-details">
  <div class="title">Acme Developers</div>
  <div class="identifier">ACMEDEVELOPERS</div>
</div>
```
```
const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

// will keep text from title element
let titleText

cy.get('.company-details')
  .find('.title')
  .then(($title) => {
    // save text from the first element
    titleText = normalizeText($title.text())
  })

cy.get('.company-details')
  .find('.identifier')
  .should(($identifier) => {
    // we can massage text before comparing
    const idText = normalizeText($identifier.text())

    // text from the title element should already be set
    expect(idText, 'ID').to.equal(titleText)
  })
```
### Multiple Assertions
#### Chaining multiple assertions
Cypress makes it easier to chain assertions together.
In this example we use .and() which is identical to .should().
```
// our subject is not changed by our first assertion,
// so we can continue to use DOM based assertions
cy.get('option:first').should('be.selected').and('have.value', 'Metallica')
```
#### Wait until the assertions pass
Cypress won’t resolve your commands until all of its assertions pass.
```
// Application Code
$('button').click(() => {
  $button = $(this)

  setTimeout(() => {
    $button.removeClass('inactive').addClass('active')
  }, 1000)
})
cy.get('button').click()
  .should('have.class', 'active')
  .and('not.have.class', 'inactive')
```

### Differences
What’s the difference between .then() and .should()/.and()?   

Using **.then()** allows you to use the yielded subject in a callback function and should be used when you need to manipulate some values or do some actions.

When using a callback function with **.should() or .and()**, on the other hand, there is special logic to **rerun the callback function** until no assertions throw within it. You should be careful of side affects in a .should() or .and() callback function that you would not want performed multiple times.

### Timeouts 
**.should()** will continue to retry its specified assertions until it times out.
```
cy.get('input', { timeout: 10000 }).should('have.value', '10')
// timeout here will be passed down to the '.should()'
// and it will retry for up to 10 secs
```
```
cy.get('input', { timeout: 10000 }).should(($input) => {
  // timeout here will be passed down to the '.should()'
  // unless an assertion throws earlier,
  // ALL of the assertions will retry for up to 10 secs
  expect($input).to.not.be('disabled')
  expect($input).to.not.have.class('error')
  expect($input).to.have.value('US')
})
```
