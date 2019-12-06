---
title: "Build a Gatsby Theme"
date: "2019-11-12"
description: Gatsby Themes are the Next Big Thing™ for building web sites and apps.
category: Gatsby 
---

Gatsby Themes are the Next Big Thing™ for building web sites and apps. In this stream, [John Otander](https://twitter.com/4lpine) teaches [Jason Lengstorf](https://twitter.com/jlengstorf) how to build a Gatsby theme from scratch, how to use it, and how to create child themes. 

<iframe width="100%" src="https://www.youtube.com/embed/PS2784YfPpw" frameborder="0" allowfullscreen></iframe>

<strong>What’s MDX?</strong>

MDX is <strong>Markdown for the component era</strong>. It lets you write JSX embedded inside Markdown. It’s a great combination because it allows you to use Markdown’s terse syntax (such as # Heading) for your content and JSX for more advanced, or reusable components.

This is useful in <strong>content-driven sites</strong> where you want the ability to introduce components like charts or alerts without having to configure a plugin. It emphasizes composition over configuration and really shines with interactive blog posts, documenting design systems, or long form articles with immersive or dynamic interactions.

When using MDX you can also import other MDX documents and render them as components. This lets you write something like an FAQ page in one place and reuse it throughout your website.

<strong>What does it look like in practice?</strong>

Importing and JSX syntax works just like it does in your components. This results in a seamless experience for developers and content authors alike. Markdown and JSX are included alongside each other like this:

```js
import { Chart } from '../components/chart'
# Here’s a chart
The chart is rendered inside our MDX document.
<Chart />
```

