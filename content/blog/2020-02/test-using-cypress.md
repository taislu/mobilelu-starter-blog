---
title: "Avoiding The Suck Of Testing Using Cypress.io"
date: "2020-02-07"
description: This workshop will show you the flaws in your current testing strategies and how to most effectively test your applications using Cypress
category: Test
---

<iframe width="100%" src="https://www.youtube.com/embed/GH9Dvo_BYkk" frameborder="0" allowfullscreen></iframe>

The state of application testing for Angular is broken. Angular applications are composed of UI components running in a browser, but **our most effective testing strategy has been unit testing functions instead of UI interactions**. The recommended strategy for testing the UI is Protractor, which is built on Selenium, a technology originating in 2004 when the web was all server-side rendering. 

This workshop will show you the flaws in your current testing strategies and how to most effectively test your applications using **Cypress**. Jesse Sanders and Joe Eames will walk you through why your current test strategy fails and how to test your applications with less time and effort. They will guide you through installation, configuration, and best practices for writing tests using Cypress. This hands on workshop will guide you through multiple testings scenarios that will provide you with the necessary skills to handle even the most complex test cases

cypress/integration/**articles.spec.ts**  
```
describe('Articles', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load when home page loads', () => {
    cy.get('app-article').should('have.length.greaterThan', 0);
  });

  it('should search', () => {
    cy.get('input.search').type('canvas');
    cy.get('.search-button').click();
    cy.get('app-article').should('have.length', 1);
  });

  // USER CREATED TEST
  // RUN APP WITH 'NPM START'
  // IN A DIFFERENT CONSOLE WINDOW RUN CYPRESS WITH 'NPX CYPRESS OPEN'
  it('should search (student version)', () => {
  // put test here
    cy.get('input.search').type('jesse');
    cy.get('.search-button').click();
    cy.get('app-article').should('have.length', 0);

  });

  // USER CREATED TEST FOR TAGS
  it('should filter tags', () => {
    // check that the total number of tags is 20
    cy.get('div.tags').should('have.length', 20)

    // find tags search input and type 'anim' in it
    cy.get('.tags-container input').type('anim')

    // assert the number of tags returned
    cy.get('.tags').should('have.length', 3)

    // click on 2nd tag 'animations'
    // assert the number of selected tags is 1
    // assert total tags is 15
    // click on the tag with routing
    // assert there are 3 articles
    // BONUS
    // reset filters, check number of tags and articles
    // select a tag, assert it's selected
    // unselect that tag, assert back to default state
  });
});
```

#### Cypress can wait for API calls
26:19 
(Selenium can wait for the elements to show up, but not api calls)

cypress/integration/**articles-using-waits.spec.ts**
```
describe('Articles using waits', () => {
  it('should wait for tags', () => {
    cy.server();
    cy.route('/api/tags').as('tags');
    cy.visit('/')
    cy.wait('@tags');

    cy.get('.tags-container input').type('anim');
    cy.get('div.tags').should('have.length', 3);
  });

  // USER CREATED TEST FOR WAITS
  // should wait for articles to load then assert count
  // BIG HINT: route: api/articles/recent
  // More subtle hint: route: api/articles/recent
  // BONUS - assert the title of the 3rd article
  // BONUS - assert anchor target for articles is _blank
  // HINT: http://example.cypress.io
  // HINT: https://docs.cypress.io/api/commands/should.html#Value
  it('recents articles should display 25 articles', () => {
        cy.server();
        cy.route('/api/articles/recent').as('articles');
        cy.visit('/');
        cy.wait('@articles');

  });
});
```

#### Declaring routes with stubs
```  
cy.server(); // start the server
cy.route({
method: 'GET',   // route all GET requests
url: '/users/*', // that have a URL matching '/users/*'
response: []     // and force the response to be []
});
```

cypress/integration/**articles-using-stubs.spec.ts**
```
describe('Articles using stubs', () => {
  it('stubbing tests using router', () => {
    cy.server();
    cy.route('/api/articles/recent', []);

    cy.visit('/');
    cy.get('app-article').should('have.length', 0);
  });

  it('stubbing tests using router and waiting', () => {
    cy.server();
    cy.route('/api/articles/recent', [
      {
        _id: '58e5e3c695fa350004ee37f3',
        submitted_date: '2017-04-06T06:44:22.103Z',
        submitted_by_name: 'Kim Maida',
        submitted_by_id: 102521772882979320000,
        published_date: '2017-03-07T00:00:00.000Z',
        author_lower_name: 'kim maida',
        author_name: 'Kim Maida',
        status: 'approved',
        title_lower: 'managing state in angular with ngrx/store',
        title: 'Managing State in Angular with ngrx/store',
        url:
          'https://auth0.com/blog/managing-state-in-angular-with-ngrx-store/',
        version: '2+',
        type: 'Blog',
        __v: 0,
        url_lower:
          'https://auth0.com/blog/managing-state-in-angular-with-ngrx-store/',
        rating: 0,
        tags: ['ngrx', 'state-management']
      }
    ]).as('articles');

    cy.visit('/');

    cy.wait(['@articles']);

    cy.get('app-article').should('have.length', 1);
  });

  // USER CREATED TEST FOR STUBS
  // stub the tags api call to only return 'constructor' & 'components'
  // assert that tags count = 2
  // HINT tag model: {_id: '1', tag:'testing'}
  // BONUS: select a tag by clicking on it and
  // have api / articles / search return 1 article
  it('should display 2 tags', () => {
        cy.server();
        cy.route('/api/tags', [
            {_id: '1', tag:'constructor'},
            {_id: '2', tag:'component'}
        ]).as('tags');

        cy.visit('/');
        cy.wait('@tags');

        cy.get('div.tags').should('have.length', 2);

  });
});
```

42:00 CI : **npx cypress run**

