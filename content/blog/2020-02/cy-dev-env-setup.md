---
title: "Cypress Dev Environment Setup"
date: "2020-02-07"
description: Set up Cypress in your Dev Environment
category: Cypress
---

[Set up Cypress in your Dev Environment](https://docs.cypress.io/guides/tooling/intelligent-code-completion.html#Set-up-in-your-Dev-Environment)

[Install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

```bash
cd /your/project/path
npm install -D cypress
```

### Triple slash directives

```
// type definitions for Cypress object "cy"
/// <reference types="Cypress" />
```

The simplest way to see **IntelliSense** when typing a Cypress command or assertion is to add a [triple-slash directive](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) to the **head** of your **JavaScript or TypeScript testing file**. This will turn the IntelliSense on a **per file basis**.

a /// <reference types="..." /> directive declares a dependency on a package.
The process of resolving these package names is similar to the process of resolving module names in an import statement. An easy way to think of triple-slash-reference-types directives are as an **import** for declaration packages.

### Reference type declarations via jsconfig

```
{
  "include": [
    "./node_modules/cypress",
    "cypress/**/*.js"
  ]
}
```

Instead of adding triple slash directives to each JavaScript spec file, some IDEs (like VS Code) understand a common **jsconfig.json** file in the root of the project. In that file, you can include the Cypress module and your test folders.   

### Reference type declarations via tsconfig

```
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": [
      "cypress"
    ]
  },
  "include": [
    "**/*.*"
  ]
}
```

Adding a **tsconfig.json** inside your **cypress folder** with the configuration should get intelligent code completion working.

### Set up in VSCode

To set up in **Visual Studio Code** you can open Preferences / Settings / User Settings and add the json.schemas property. Make sure to replace cypress.json with your configuration file if not the default.

```
{
  "json.schemas": [
    {
      "fileMatch": [
        "cypress.json"
      ],
      "url": "https://on.cypress.io/cypress.schema.json"
    }
  ]
}
```

### cypress.json
```
{ 
    "baseUrl": "http://localhost:5000", 
}
```





