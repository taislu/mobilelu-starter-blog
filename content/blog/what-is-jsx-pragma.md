---
title: "What is JSX Pragma"
date: "2019-11-14"
description: A pragma is a compiler directive. It tells the compiler how it should handle the contents of a file. JSX syntax on its own isn’t readable by the browser. In order to ship something readable to the browser, JSX needs to be converted to plain JavaScript.
category: Gatsby
---

<a href="https://www.gatsbyjs.org/blog/2019-08-02-what-is-jsx-pragma/"
     target="_blank">Source : What is JSX Pragma</a>

If you’re looking into using [Theme UI](https://theme-ui.com/) , you’ll come across some (potentially) unfamiliar looking syntax:

```bash
/** @jsx jsx */
import { jsx } from "theme-ui"
```

This is a JSX pragma. What the heck is a JSX pragma? I had heard the phrase, but not thought too much about it until it came up with Gatsby theming — and lots of other folks hadn’t either.

<strong>What is a pragma?</strong>

A pragma is a <strong>compiler directive</strong>. It tells the compiler how it should handle the contents of a file.

An example of this in JavaScript is 'use strict' mode. 'use strict' is a directive that enables JavaScript’s [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), which is a way to opt in to a more restricted variant of JavaScript. It denotes that the code should be processed in a specific way.

<strong>What is JSX pragma?</strong>

JSX syntax on its own isn’t readable by the browser. In order to ship something readable to the browser, JSX needs to be converted to plain JavaScript.

Most React-based frameworks (like Gatsby), come with tooling already set up to support this conversion (usually Babel). How does that tooling know how to transform JSX? By default, the [Babel plugin](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) will convert JSX into JavaScript that calls the <strong>React.createElement</strong> function.

Take the following JSX, for example:

```bash
const element = <h1 className="greeting">Hello, world!</h1>
```

That JSX syntax compiles to a call to React.createElement, like this:

```bash
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
)
```

<strong>Using a custom JSX pragma</strong>

There are two ways to specify a custom function (and therefore replace React.createElement):

- Add an option to the Babel plugin
- Set a pragma comment at the beginning of a module

<strong>Add an option to the Babel plugin</strong>

Changing the function in the <strong>Babel plugin</strong> will transform all JSX in an application to use the specified function.

[Babel Preset](https://emotion.sh/docs/@emotion/babel-preset-css-prop)

This method will not work with [Create React App](https://github.com/facebook/create-react-app) or other projects that do not allow custom babel configurations. Use the JSX Pragma method instead.

<strong>.babelrc</strong>
```bash
{
  "presets": ["@emotion/babel-preset-css-prop"]
}
```

<strong>Set a pragma comment</strong>

Using a pragma comment will limit the change to the modules the comment is added to. Therefore, you can use React.createElement by default, and opt in to the custom function only where needed. This is [the approach taken in Theme UI](https://www.gatsbyjs.org/docs/theme-ui/#adding-styles-to-elements).

