---
title: "NPM start-server-and-test"
date: "2020-02-13"
description: Starts server, waits for URL, then runs test command; when the tests end, shuts down server
category: Test
---

[NPM start-server-and-test](https://github.com/bahmutov/start-server-and-test)

Starts server, waits for URL, then runs test command; when the tests end, shuts down server

### Install
Requires Node version 8.9 or above.
```bash
npm install --save-dev start-server-and-test
```
### Use
This command is meant to be used with **NPM script commands**. If you have a "start server", and "test" script names for example, you can start the server, wait for a url to respond, then run tests. When the test process exits, the server is shut down.
```
{
    "scripts": {
        "start-server": "npm start",
        "test": "mocha e2e-spec.js",
        "ci": "start-server-and-test start-server http://localhost:8080 test"
    }
}
```
To execute all tests simply run npm run ci.

### Commands
In addition to using NPM script names, you can pass entire commands (surround them with quotes so it is still a single string) that will be executed "as is". For example, to start globally installed http-server before running and recording Cypress.io tests you can use
```bash
# run http-server, then when port 8000 responds run Cypress tests
start-server-and-test 'http-server -c-1 --silent' 8000 './node_modules/.bin/cypress run --record'
```
Because npm scripts execute with ./node_modules/.bin in the $PATH, you can mix global and locally installed tools when using commands inside **package.json** file. For example, if you want to run a single spec file:
```
{
  "scripts": {
    "ci": "start-server-and-test 'http-server -c-1 --silent' 8080 'cypress run --spec cypress/integration/location.spec.js'"
  }
}
```
Or you can move http-server part into its own **start** script, which is **used by default** and have the equivalent JSON
```
{
  "scripts": {
    "start": "http-server -c-1 --silent",
    "ci": "start-server-and-test 8080 'cypress run --spec cypress/integration/location.spec.js'"
  }
}
```
Here is another example that uses Mocha
```
{
  "scripts": {
    "ci": "start-server-and-test 'http-server -c-1 --silent' 8080 'mocha e2e-spec.js'"
  }
}
```
### Alias
You can use either **start-server-and-test**, server-test or start-test commands in your scripts.

You can use : in front of port number like server-test :8080, so all these are equivalent

start-server-and-test start http://localhost:8080 test   
server-test start http://localhost:8080 test   
server-test http://localhost:8080 test   
start-test :8080 test   
start-test 8080 test   
start-test 8080   

### Options
If you use convention and name your scripts "**start**" and "**test**" you can simply provide URL
```
{
    "scripts": {
        "start": "npm start",
        "test": "mocha e2e-spec.js",
        "ci": "start-server-and-test http://localhost:8080"
    }
}
```
You can also **shorten local url to just port**, the code below is equivalent to checking http://localhost:8080.
```
{
    "scripts": {
        "start": "npm start",
        "test": "mocha e2e-spec.js",
        "ci": "server-test 8080"
    }
}
```
You can provide first start command, port (or url) and implicit test command
```
{
    "scripts": {
        "start-it": "npm start",
        "test": "mocha e2e-spec.js",
        "ci": "server-test start-it 8080"
    }
}
```
You can provide port number and custom test command, in that case npm start is assumed to start the server.
```
{
    "scripts": {
        "start": "npm start",
        "test-it": "mocha e2e-spec.js",
        "ci": "server-test :9000 test-it"
    }
}
```


