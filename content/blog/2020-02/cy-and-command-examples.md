---
title: "Cypress And command examples"
date: "2020-02-18"
description: An alias of .should()
category: Cypress
---

[Cypress and command examples](https://docs.cypress.io/api/commands/and.html#Syntax)

Assert '.err' is empty & hidden
```
cy.get('.err').should('be.empty').and('be.hidden') 
```

Assert element is visible   
```
cy.contains('Login').and('be.visible')  
```           
```
cy.wrap({ foo: 'bar' })
  .should('have.property', 'foo') // Assert 'foo' property exists
  .and('eq', 'bar')               // Assert 'foo' property is 'bar'
```
Assert nav element should be visible and have open class
```
cy
  .get('nav')                       // yields <nav>
  .should('be.visible')             // yields <nav>
  .and('have.class', 'open')        // yields <nav>
```
```
cy
  .get('nav')                       // yields <nav>
  .should('be.visible')             // yields <nav>
  .and('have.css', 'font-family')   // yields 'sans-serif'
  .and('match', /serif/)            // yields 'sans-serif'
```
```
cy.get('button').should('have.class', 'active').and('not.be.disabled')
```
```html
<!-- App Code -->
<ul>
  <li>
    <a href="users/123/edit">Edit User</a>
  </li>
</ul>
```
```
cy
  .get('a')
  .should('contain', 'Edit User') // yields <a>
  .and('have.attr', 'href')       // yields string value of href
  .and('match', /users/)          // yields string value of href
  .and('not.include', '#')        // yields string value of href
```
Assert the href is equal to ‘/users’
```
cy
  .get('#header a')
  .should('have.class', 'active')
  .and('have.attr', 'href', '/users')
```
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
  .should('not.be.empty')
  .and(($p) => {
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
```
cy.get('input', {timeout: 10000}).should('have.value', '10').and('have.class', 'error')
```

Timeout here will be passed down to the '.and()' and it will retry for up to 10 secs
```
cy.get('input', {timeout: 10000}).should('have.value', 'US').and(($input) => {
  // timeout here will be passed down to the '.and()'
  // unless an assertion throws earlier,
  // ALL of the assertions will retry for up to 10 secs
  expect($input).to.not.be('disabled')
  expect($input).to.not.have.class('error')
})
```
Chain assertions on the same subject
```
cy
  .get('.list')
  .find('input[type="checkbox"]')
  .should('be.checked')
  .and('not.be.disabled')
```

