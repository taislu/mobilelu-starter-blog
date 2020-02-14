---
title: "Gatsby End-to-End Test with a Default Starter"
date: "2020-02-13"
description: A good use case for writing automated end-to-end tests is asserting accessibility with cypress-axe, a Cypress plugin that incorporates the axe accessibility testing API
category: Cypress
---

[Gatsby End-to-End Test with a Default Starter](https://www.gatsbyjs.org/docs/end-to-end-testing/)

```bash
gatsby new gatsby-e2e-cypress-demo
cd gatsby-e2e-cypress-demo   
```

In order to **run Gatsby’s development server and Cypress at the same time** we’ll use the little helper **start-server-and-test**. 

```bash
npm install -D cypress start-server-and-test
```

We also want the URLs used by cy.visit() or cy.request() to be prefixed & create a new folder cypress/e2e (end to end), hence you have to create the file cypress.json at the root of your project with the following content:

**cypress.json**
```
{
  "baseUrl": "http://localhost:8000/",
  "integrationFolder": "cypress/e2e"
}
```

Last but not least you add additional scripts to your package.json to run Cypress:

**package.json**
```
{
  "scripts": {
    "develop": "gatsby develop",
    "cy:open": "cypress open",
    "test:e2e": "start-server-and-test develop http://localhost:8000 cy:open"
  }
}
```
Run **npm run test:e2e** in your command line and see Cypress running for the first time. A folder named cypress will be created at the root of your project and a new application window will pop up.
```bash
npm run test:e2e
```

### Continuous Integration

If you want to run Cypress in Continuous Integration (CI) you have to use **cypress run** instead of cypress open:   
**package.json**
```
{
  "scripts": {
    "develop": "gatsby develop",
    "cy:open": "cypress open",
    "test:e2e": "start-server-and-test develop http://localhost:8000 cy:open",
    "cy:run": "cypress run",
    "test:e2e:ci": "start-server-and-test develop http://localhost:8000 cy:run"
  }
}
```
Run **npm run test:e2e:ci** in your command line and see Cypress running for CI.
```
npm run test:e2e:ci
```

A good use case for writing automated end-to-end tests is asserting accessibility with [cypress-axe](https://github.com/avanslaars/cypress-axe), a Cypress plugin that incorporates the axe **accessibility testing API**. 

To use cypress-axe you have to install cypress-axe and axe-core. You’ll also use some commands from @testing-library/cypress to target elements easier:   

```bash
npm install -D cypress-axe axe-core @testing-library/cypress
```
 
Then you add the cypress-axe and @testing-library/cypress commands in **cypress/support/index.js**:

**cypress/support/index.js**
```
import "./commands"
import "cypress-axe"
import "@testing-library/cypress/add-commands"
```

Create a new file inside cypress/e2e folder and name it a11y.test.js.

We’ll use the beforeEach hook to run some commands before each test. After cypress loads the homepage you’ll use the checkA11y method from cypress-axe to check for accessibility violations:

**cypress/e2e/a11y.test.js**
```
/// <reference types="Cypress" />

describe("Accessibility checks", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.injectAxe()
    cy.wait(500)
  })
  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y()
  })
  it("Navigates to page 2 and checks for accessibility violations", () => {
    cy.findByText(/go to page 2/i)
      .click()
      .checkA11y()
  })
  it("Checks if footer link is focusable and has the correct attributes", () => {
    cy.findAllByText("Gatsby").focus()
    cy.focused()
      .should("have.text", "Gatsby")
      .should("have.attr", "href", "https://www.gatsbyjs.org")
      .should("not.have.css", "outline-width", "0px")
  })
})
```

You can then run e2e (with UI) or CI (without UI) for the regression tests going forward.

```
npm run test:e2e
npm run test:e2e:ci
```




 

