---
title: "Cypress Bundled Tools"
date: "2020-02-17"
description: Cypress relies on many best-of-breed open source testing libraries (such as Mocha, Chai, Chai-jQuery, Sinon, and Sinon-Chai) to lend stability and familiarity to the platform
category: Cypress
---

[Cypress Bundled Tools ](https://docs.cypress.io/guides/references/bundled-tools.html#Mocha)

Cypress relies on many best-of-breed open source testing libraries to lend stability and familiarity to the platform

### Mocha
Cypress has adopted Mocha’s **bdd** syntax, which fits perfectly with both **integration and unit testing**. All of the tests you’ll be writing sit on the fundamental harness Mocha provides, namely:  
•	describe()   
•	context()   
•	it()   
•	before()   
•	beforeEach()   
•	afterEach()   
•	after()   
•	.only()   
•	.skip()   

Additionally, Mocha gives us excellent async support. Cypress has extended Mocha, sanding off the rough edges, weird edge cases, bugs, and error messages. These fixes are all completely transparent.

[Cypress Writing and Organizing Tests]( https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure)

### Chai
While Mocha provides us a framework to structure our tests, Chai gives us the ability to easily write **assertions**. Chai gives us readable assertions with excellent error messages. Cypress extends this, fixes several common pitfalls, and wraps Chai’s DSL using subjects and the .should() command.

[Cypress Chai Assertions](https://docs.cypress.io/guides/references/assertions.html#Chai)

### Chai-jQuery
When writing integration tests, you will likely work a lot with the DOM. Cypress brings in Chai-jQuery, which automatically extends Chai with specific jQuery chainer methods.

[Cypress Chai-jQuery Assertions]( https://docs.cypress.io/guides/references/assertions.html#Chai-jQuery)

### Sinon.JS
When writing unit tests, or even in integration-like tests, you often need to ability to stub and spy methods. Cypress includes two methods, **cy.stub() and cy.spy()** that return Sinon stubs and spies, respectively.

[Cypress working with spies, stubs, and clocks]( https://docs.cypress.io/guides/guides/stubs-spies-and-clocks.html#Capabilities)

### Sinon-Chai
When working with stubs or spies you’ll regularly want to use those when writing Chai assertions. Cypress bundles in Sinon-Chai which extends Chai allowing you to writeassertions about stubs and spies.

### Other Library Utilities
Cypress also bundles the following tools on the Cypress object. These can be used anywhere inside of your tests.   
•	Cypress._ (lodash)   
•	Cypress.$ (jQuery)   
•	Cypress.minimatch (minimatch.js)   
•	Cypress.moment (moment.js)    
•	Cypress.Blob (Blob utils)   
•	Cypress.Promise (Bluebird)   

