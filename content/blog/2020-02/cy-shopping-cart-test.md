---
title: "Shopping Cart test example"
date: "2020-02-21"
description: Verify the total amount after the quantity updated in the shopping cart
category: Cypress
---

[Locators in Cypress](https://www.youtube.com/watch?v=w56cKguv3qo)     
[Locators DEMO](https://www.youtube.com/watch?v=w5O25AZfpaM)     
[CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)   
[Try CSS Selector](https://www.w3schools.com/cssref/trysel.asp)   
#### selector   
 .class  
 #id   
 \[attribute=value\]   
 .class\[attribute=value\]   

cy.get(**selector**)   


### Shopping Cart Test Scenario/Flow   
1: Launch Browser & Open Url : https://demo.nopcommerce.com/    
2: Enter Text in Search box : “HP Spectre XT Pro UltraBook"   
3: Click on Search button   
4: Click on ADD TO CART    
5: Click on Shopping Cart Link at the top of the page : **Locator** : cy.get("**#topcartlink > a > span.cart-label**")   
6: Verify the unit price  $1,350.00 : **Assertion** : should('**contain**', '$1,350.00')   
7: Enter Quantity 2   
8: Update shopping cart   
9: Verify Total  $2,700.00 : **Locator** : cy.get("**.value-summary > strong**") : **Assertion** : .should(($total)=>{ **expect($total).to.contain('$2,700.00')** })

### Cypress Test Script  

**cypress/integration/shopping-cart-test.js**
```
/// <reference types="Cypress" />

describe('Shopping Cart Test Quantity Update', function(){
    it('Verify the total amount after the quantity updated', function(){
        //1: Launch Browser & Open Url
        cy.visit("https://demo.nopcommerce.com/")

        //2: Enter Text in Search box
        cy.get("#small-searchterms").type("HP Spectre XT Pro UltraBook")

        //3: Click on Search button
        cy.get(".search-box-button[type=submit]").click()

        //4: Click on ADD TO CART
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

        //5: Click on Shopping Cart Link at the top of the page
        cy.get("#topcartlink > a > span.cart-label").click()

        //6: Verify the unit price $1,350.00
        //cy.get(".product-unit-price").contains("$1,350.00")
        cy.get(".product-unit-price").should('contain', '$1,350.00')

        //7: Enter Quantity 2
        cy.get(".qty-input").clear().type('2')

        //8: Update shopping cart
        cy.get(".update-cart-button[name=updatecart]").click()

        //9: Verify Total  $2,700.00
        //cy.get(".value-summary > strong").contains('$2,700.00')
        cy.get(".value-summary > strong")
          .should(($total)=>{
              expect($total).to.contain('$2,700.00')
          })
    })
})
```

### Cypress Run Command

```bash
npx cypress run --browser chrome --spec "cypress/integration/shopping-cart-test.js"
```