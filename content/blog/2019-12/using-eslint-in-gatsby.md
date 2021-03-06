---
title: "Using ESLint in Gatsby"
date: "2019-12-15"
description: Gatsby ships with a built-in ESLint setup. For most users, our built-in ESlint setup is all you need. If you know however that you’d like to customize your ESlint config e.g. your company has their own custom ESlint setup, this shows how this can be done.
category: ESLint
---

[Using ESLint in Gatsby](https://www.gatsbyjs.org/docs/eslint/)

ESLint is an open source JavaScript linting utility. Code linting is a type of static analysis that is frequently used to find problematic patterns. JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like **ESLint allow developers to discover problems with their JavaScript code without executing it**.

**Gatsby ships with a built-in ESLint setup**. For most users, our built-in ESlint setup is all you need. If you know however that you’d like to **customize** your ESlint config e.g. your company has their own custom ESlint setup, this shows how this can be done.

You’ll replicate (mostly) the [ESLint config Gatsby ships with](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/eslint-config.js) so you can then add additional presets, plugins, and rules. 

### First install the necessary ESLint dependencies
```bash
npm install --save-dev eslint-config-react-app
```

Now that your packages have been installed, create a new file at the root of the site named **.eslintrc.js** using the command below.

### Create a config file for ESLint
```bash
touch .eslintrc.js
```

### Configuring ESLint
Copy the snippet below to the newly created .eslintrc.js file. Then add additional presets, plugins, and rules as desired.

.eslintrc.js
```
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
}
```

Note: When there is no ESLint file **Gatsby implicitly adds a barebones ESLint loader**. This loader pipes ESLint feedback into the terminal window where you are running or building Gatsby and also to the console in your browser developer tools. This gives you consolidated, immediate feedback on newly-saved files. 

**When you include a custom .eslintrc file, Gatsby gives you full control over the ESLint configuration**. This means that it will override the built-in eslint-loader and you need to enable any and all rules yourself. One way to do this is to use the Community plugin gatsby-eslint-plugin. This also means that the default ESLint config Gatsby ships with will be entirely overwritten. If you would still like to take advantage of those rules, you’ll need to copy them to your local file.

### Disabling ESLint

**Creating an empty .eslintrc file at the root of your project will disable ESLint for your site**. The empty file will disable the built-in eslint-loader because Gatsby assumes once you have an ESLint file you are in charge of linting.

Use **eslint-disable** and **eslint-enable** to disable eslint for a block of code.
```
/* eslint-disable */
    React.useEffect(() => {
        const timer = setInterval(() => {

        if (index === images.length-1) setInc(-1)
        if (index === 0) setInc(1)
        setIndex(prev => prev + inc);
        
        }, 3000);
        return () => clearInterval(timer);
    }, [index]);
/* eslint-enable */
```