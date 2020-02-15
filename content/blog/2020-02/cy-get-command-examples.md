---
title: "Cypress Get command examples"
date: "2020-02-14"
description: The querying behavior of this command matches exactly how $(…) works in jQuery.
category: Cypress
---

[Cypress get command examples](https://docs.cypress.io/api/commands/get.html#Syntax)

The querying behavior of this command matches exactly how **$(…)** works in **jQuery**.

Get the input element
```
cy.get('input').should('be.disabled')
```

Find the **first li descendent within a ul**
```
cy.get('ul li:first').should('have.class', 'active')
```

Find the dropdown-menu and click it
```
cy.get('.dropdown-menu').click()
```

Find 5 elements with the given data attribute
```
cy.get('[data-test-id="test-example"]').should('have.length', 5)
```

Find the link with an **href attribute containing** the word “questions” and click it
```
cy.get('a[href*="questions"]').click()
```

Since cy.get() is chained off of cy, it always looks for the selector **within the entire document**. The **only exception** is when used inside a **.within()** command.

Find input & textarea elements **inside a form element**
```
cy.get('form').within(() => {
  cy.get('input').type('Pamela') // Only yield inputs within form
  cy.get('textarea').type('is a developer') // Only yield textareas within form
})
```
Get the aliased ‘todos’ elements
```
cy.get('ul#todos').as('todos')

//...hack hack hack...

//later retrieve the todos
cy.get('@todos')
```
Get the aliased ‘submitBtn’ element
```
beforeEach(function() {
  cy.get('button[type=submit]').as('submitBtn')
})

it('disables on click', function() {
  cy.get('@submitBtn').should('be.disabled')
})
```
Get the **aliased ‘users’ fixture**
```
beforeEach(function() {
  cy.fixture('users.json').as('users')
})

it('disables on click', function() {
  // access the array of users
  cy.get('@users').then((users) => {
    // get the first user
    const user = users[0]

    cy.get('header').contains(user.name)
  })
})
```
Get an input and assert on the value
```
cy.get('input[name="firstName"]').should('have.value', 'Homer')
```
