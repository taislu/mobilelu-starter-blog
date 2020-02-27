---
title: "Add Fonts in Tailwind CSS with Gatsby"
date: "2020-02-27"
description: You can change, add, or remove fonts by editing the theme.fontFamily section of your Tailwind config.
category: Gatsby
---

[Add a Google font to your Tailwind CSS](https://scottw.com/blog/google-font-tailwind/)

### Tailwind Font Families
**By default** Tailwind provides **three** font family utilities: a cross-browser sans-serif stack, a cross-browser serif stack, and a cross-browser monospaced stack. You can change, add, or remove these by editing the **theme.fontFamily** section of your Tailwind config.

**tailwind.config.js**
```
module.exports = {
    theme: {
        fontFamily: {
-     	'sans': ['-apple-system', 'BlinkMacSystemFont', ...],
-     	'serif': ['Georgia', 'Cambria', ...],
-     	'mono': ['SFMono-Regular', 'Menlo', ...],
        }
    }
}
```

### Add a google font in Tailwind with Gatsby

**First**, select your font and then add the package to your project via the [typefaces project](https://github.com/KyleAMathews/typefaces).

For example : to add **roboto** font
```bash
npm install typeface-roboto
```
**Next**, import the package in gatsby-browser.js:

**gatsby-browser.js**
```
import 'typeface-roboto'
import "./src/styles/tailwind.css"
```

**Finally**, add it to your Tailwind CSS configuration file (usually **tailwind.config.js**). How you do this, depends on your desired usage.

**tailwind.config.js**
```
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"]
      }
    }
  }
};
```
From here, you should have a new css class available called **font-roboto**.


