---
title: "Add Fonts Using NPM Packages"
date: "2019-12-25"
description: NPM packages for Open Source typefaces — making it easier to self-host webfonts
category: CSS
---

[Fonts Available in NPM](https://github.com/KyleAMathews/typefaces)

### Why

- **Self-hosting** is significantly faster. Loading a typeface from Google Fonts or other hosted font service adds an extra (blocking) network request. In my testing, I’ve found replacing Google Fonts with a self-hosted font can improve a site’s speedindex by ~300 miliseconds on desktop and 1+ seconds on 3g. This is a big deal.  
- Your fonts load offline. It’s annoying to start working on a web project on the train or airplane and see your interface screwed up because you can’t access Google fonts. I remember once being in this situation and doing everything possible to avoid reloading a project as I knew I’d lose the fonts and be forced to stop working.  
- Go beyond Google Fonts. Some of my favorite typefaces aren’t on Google Fonts like Clear Sans, Cooper Hewitt, and Aleo.
- All web(site|app) dependencies should be managed through NPM whenever possible. Tis the modern way.

### What
- Each typeface package ships with all the necessary font files and css to self-host an open source typeface.

- **All Google Fonts have been added** as well as a small but growing list of other open source fonts. Open an issue if you want a font added!

## How
Couldn’t be easier. This is how you’d add Open Sans.
```
npm install --save typeface-open-sans
```
Then in your app or site’s entry file.
```
require("typeface-open-sans")
```
or
```
import "typeface-open-sans"
```
And that’s it! You’re now self-hosting Open Sans!

It should take < 5 minutes to swap out Google Fonts.

Typeface assumes you’re using webpack with loaders setup for loading css and font files (you can use Typeface with other setups but webpack makes things really really simple). Assuming your webpack configuration is setup correctly you then just need to require the typeface in the entry file for your project.

Many tools built with webpack such as **Gatsby** and **Create React App** are already setup to work with Typefaces. Gatsby by default also embeds your CSS in your <head> for even faster loading.