---
title: "Cypress Timeouts"
date: "2020-02-12"
description: Cypress offers several different timeout values based on the type of command.
category: Cypress
---

[Cypress Timeouts]( https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Timeouts)

Almost all commands can time out in some way.    
All assertions, whether they’re the default ones or whether they’ve been added by you all share the same timeout values.     

#### Applying Timeouts
You can modify a command’s timeout. This timeout affects both its default assertions (if any) and any specific assertions you’ve added.

Remember because assertions are used to describe a condition of the previous commands - the timeout modification goes on the previous commands not the assertions.

#### Example #1: Default Assertion
```
// because .get() has a default assertion
// that this element exists, it can time out and fail
cy.get('.mobile-nav')
```
Under the hood Cypress:    
•	Queries for the element .mobile-nav    
✨and waits up to 4 seconds for it to exist in the DOM✨    

#### Example #2: Additional Assertions
```
// we've added 2 assertions to our test
cy
  .get('.mobile-nav')
  .should('be.visible')
  .and('contain', 'Home')
```
Under the hood Cypress:    
•	Queries for the element .mobile-nav   
✨and waits up to 4 seconds for it to exist in the DOM✨    
✨and waits up to 4 seconds for it to be visible✨   
✨and waits up to 4 seconds for it to contain the text: ‘Home’✨   

The **total** amount of time Cypress will wait for all of the assertions to pass is for the duration of the cy.get() timeout (which is **4 seconds**).    
Timeouts can be modified per command and this will affect all default assertions and any assertions chained after that command.

#### Example #3: Modifying Timeouts
```
// we've modified the timeout which affects default + added assertions

cy
  .get('.mobile-nav', { timeout: 10000 })
  .should('be.visible')
  .and('contain', 'Home')
```
Under the hood Cypress:    
•	Gets the element .mobile-nav   
✨and waits up to 10 seconds for it to exist in the DOM✨    
✨and waits up to 10 seconds for it to be visible✨   
✨and waits up to 10 seconds for it to contain the text: ‘Home’✨   

Notice that this timeout has flowed down to all assertions and Cypress will now wait up to **10 seconds total** for all of them to pass.

#### Default Values
Cypress offers several different timeout values based on the type of command. We’ve set their default timeout durations based on how long we expect certain actions to take. For instance:    

•	**cy.visit()** loads a remote page and does not resolve until all of the external resources complete their loading phase. This may take awhile, so its default timeout is set to **60000ms**.    

•	**cy.exec()** runs a system command such as seeding a database. We expect this to potentially take a long time, and its default timeout is set to **60000ms**.    

•	**cy.wait()** actually uses 2 different timeouts. When waiting for a routing alias, we wait for a matching **request** for **5000ms**, and then additionally for the **server’s response** for **30000ms**. We expect your application to make a matching request quickly, but we expect the server’s response to potentially take much longer.

That leaves most other commands including all **DOM based commands** to time out by default after **4000ms**.


