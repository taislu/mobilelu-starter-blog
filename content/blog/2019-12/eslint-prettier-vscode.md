---
title: "ESLint + Prettier + VS Code — The Perfect Setup"
date: "2019-12-01"
description: Lints + Fixes React via eslint-config-airbnb
category: ESLint
---

What it does
•	**Lints JavaScript** based on the latest standards
•	Fixes issues and formatting errors with **Prettier**
•	Lints + Fixes inside of html script tags
•	Lints + Fixes **React** via **eslint-config-airbnb**
•	You can see all the [rules here](https://github.com/wesbos/eslint-config-wesbos/blob/master/.eslintrc.js)

<iframe width="100%" src="https://www.youtube.com/embed/lHAeK8t94as" frameborder="0" allowfullscreen></iframe>

**Local Install**
```bash
npx install-peerdeps --dev eslint-config-wesbos
```

In your **package.json** there are now a big list of **devDependencies**.

Create a **.eslintrc** file in the root of your project's directory (it should live where package.json does). Your .eslintrc file should look like this:
```bash
{
  "extends": [
    "wesbos"
  ]
}
```

You can add two scripts to your **package.json** to lint and/or fix:
```bash
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```
Now you can manually lint your code by running **npm run lint** and fix all fixable issues with **npm run lint:fix**. You probably want your editor to do this though.

If you'd like to overwrite eslint or prettier settings, you can add the rules in your **.eslintrc** file. The [ESLint rules](https://eslint.org/docs/rules/
) go directly under "rules" while prettier options go under "prettier/prettier". Note that prettier rules overwrite anything in my config (trailing comma, and single quote), so you'll need to include those as well.
```bash
{
  "extends": [
    "wesbos"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 8,
      }
    ]
  }
}
```

You probably want your editor to lint and fix for you. Here are the instructions for **VS Code**:
1.	Install the **ESLint** package
2.	Now we need to setup some VS Code settings via **Code/File → Preferences → Settings**. It's easier to enter these settings while editing the settings.json file, so click the **{} icon** in the top right corner:
```bash
  // These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

