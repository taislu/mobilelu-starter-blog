---
title: "Cypress First Test"
date: "2020-02-15"
description: A solid test generally covers 3 phases including "set up the application state", "take an action", and "make an assertion about the resulting application state".
category: Cypress
---

[Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)
```bash
mkdir cypress_first_test
cd cypress_first_test
npm init -y
npm install -D cypress
```
### Opening Cypress

If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from **./node_modules/.bin**.

Now you can open Cypress from your project root one of the following ways:  

The long way with the full path
```bash
./node_modules/.bin/cypress open
```
Or with the shortcut using npm bin
```bash
$(npm bin)/cypress open
```

Or by using **npx**  
note: npx is included with npm > v5.2 or can be installed separately.
```bash
npx cypress open
```
Or by using yarn
```
yarn run cypress open
```

After a moment, the **Cypress Test Runner** will launch.

### Adding npm scripts
```
package.json
{
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  },
}
```
Now you can invoke the command from your project root like so:
```
npm run cypress:open
npm run cypress:run
```

### Folder structure:
cypress   
/fixtures : network request mockup   
/integration : test spec files   
/plugins   
/support : custom commands   

[Write your first test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)

### What are describe, it, and expect?
All of these functions come from [Bundled Tools](https://docs.cypress.io/guides/references/bundled-tools.html#Mocha) that Cypress bakes in.    
•	describe and it come from **Mocha**   
•	expect comes from **Chai**   

Test Suite & Test Case structure in Cypress (**Mocha**)
```
describe('Test Suite', function(){
it('Test Case1', function(){
    chain of commands
})

it('Test Case2', function(){
    chain of commands
})
})
```

### Using ESlint?
Check out our [Cypress ESLint plugin](https://github.com/cypress-io/eslint-plugin-cypress).

### Write a real test
A solid test generally covers 3 phases:   
1.	Set up the application state.   
2.	Take an action.   
3.	Make an assertion about the resulting application state.   

You might also see this phrased as “Given, When, Then”, or “Arrange, Act, Assert”. But the idea is: First you put the application into a specific state, then you take some action in the application that causes it to change, and finally you check the resulting application state.    

Today, we’ll take a narrow view of these steps and **map them cleanly to Cypress commands**:    
1.	Visit a **web page**.   
2.	Query for an **element**.   
3.	Interact with that element.   
4.	Assert about the **content** on the page.   

#### Step 1: Visit a page
First, let’s visit a web page. We will visit our Kitchen Sink application in this example so that you can try Cypress out without needing to worry about finding a page to test.

We can pass the URL we want to visit to cy.visit(). Let’s replace our previous test with the one below that actually visits a page:

cypress/integration/**sample_spec.js**
```
/// <reference types="Cypress" />
describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')
  })
})
```

#### Step 2: Query for an element
Now that we’ve got a page loaded, we need to take some action on it. Why don’t we click a link on the page? Sounds easy enough, let’s go look for one we like… how about type?     
To find this element by its contents, we’ll use **cy.contains()**.
```
describe('My First Test', function() {
  it('finds the content "type"', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
})
```
Even without adding an assertion, we know that everything is okay! This is because many of Cypress’ commands are built to fail if they don’t find what they’re expecting to find. This is known as a Default Assertion.

[Cypress Default Assertion](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Default-Assertions)

#### Step 3: Click an element
Ok, now we want to click on the link we found. How do we do that? Add a **.click()** command to the end of the previous command, like so:
```
describe('My First Test', function() {
  it('clicks the link "type"', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})
```
#### Step 4: Make an assertion
Let’s make an assertion about something on the new page we clicked into. Perhaps we’d like to make sure the new URL is the expected URL. We can do that by looking up the URL and chaining an assertion to it with **.should()**.

Here’s what that looks like:
```
describe('My First Test', function() {
  it('clicking "type" navigates to a new url', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})
```
#### Adding more commands and assertions

We are not limited to a single interaction and assertion in a given test. In fact, many interactions in an application may require multiple steps and are likely to change your application state in more than one way.  

We can continue the interactions and assertions in this test by adding another chain to interact with and verify the behavior of elements on this new page.

We can use cy.get() to select an element based on a CSS class. Then we can use the .type() command to enter text into the selected input. Finally, we can verify that the value of the input reflects the text that was typed with another .should().
```
describe('My First Test', function() {
  it('Gets, types and asserts', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
```
And there you have it: a short test in Cypress that visits a page, finds and clicks a link, verifies the URL and then verifies the behavior of an element on the new page. If we read it out loud, it might sound like:   
1.	Visit: https://example.cypress.io   
2.	Find the element with content: type   
3.	Click on it   
4.	Get the URL   
5.	Assert it includes: /commands/actions   
6.	Get the input with the .actions-email class   
7.	Type `fake@email.com` into the input   
8.	Assert the input reflects the new value   

Or in the **Given, When, Then** syntax:   
1.	Given a user visits https://example.cypress.io   
2.	When they click the link labeled type   
3.	And they type “fake@email.com“ into the .actions-email input   
4.	Then the URL should include /commands/actions   
5.	And the .actions-email input has “fake@email.com“ as its value   

#### Page Transitions
Worth noting is that this test transitioned across two different pages.   
1.	The initial cy.visit()   
2.	The .click() to a new page   

Cypress automatically detects things like a page transition event and will automatically halt running commands until the next page has finished loading. Had the next page not finished its loading phase, Cypress would have ended the test and presented an error.

Under the hood - this means you don’t have to worry about commands accidentally running against a stale page, nor do you have to worry about running commands against a partially loaded page.

We mentioned previously that Cypress waited **4 seconds** before timing out finding a DOM element - but in this case, when Cypress detects a page transition event it automatically increases the timeout to **60 seconds for the single PAGE LOAD event**.
In other words, based on the commands and the events happening, Cypress **automatically alters its expected timeouts** to match web application behavior.

In addition to having a helpful UI, there are also special commands dedicated to the task of **debugging**.   
For instance there is:   
•	cy.pause()   
•	cy.debug()   
