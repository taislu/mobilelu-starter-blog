---
title: "gatsby-node.esm.js"
date: "2020-02-25"
description: Install esm module to use ES6/import in gatsby-node
category: Gatsby
---

[Using import/export in node.js with esm](https://medium.com/@jamischarles/using-import-export-in-node-js-with-esm-7ce9153ff63)

[gatsby ES6 issue](https://github.com/gatsbyjs/gatsby/issues/7810)      

Issue (Sep 2018) : gatsby-node.js doesn't allow ES6 javascript.    
Error : 
```bash
Error: <root>/gatsby-node.js:1
SyntaxError: Unexpected token import
```

#### Workaround (Dec 2018) :   
1.	Install esm 
```bash
npm install esm    
```
2.	Create a file called **gatsby-node.esm.js** in your root folder (the same folder that contains gatsby-node.js)   
3.	Move all your code from from gatsby-node.js to gatsby-node.esm.js   
4.	Replace all the code in **gatsby-node.js** with the following:   
```
require = require('esm')(module)
module.exports = require('./gatsby-node.esm.js')
```
5.	Use **import** in **gatsby-node.esm.js** all you want
