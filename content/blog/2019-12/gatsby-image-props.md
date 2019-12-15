---
title: "Gatsby Image Props"
date: "2019-12-15"
description: After you’ve made a query, you can pass additional options to the gatsby-image component.
category: Gatsby
---

[Gatsby-image props](https://www.gatsbyjs.org/docs/gatsby-image/)

After you’ve made a query, you can pass additional options to the gatsby-image component.

| Name | Type |	Description |
| ---- | ---- | ----------- |
| fixed | object | Data returned from the fixed query |
| fluid | object | Data returned from the fluid query |
| fadeIn|	bool|	Defaults to fading in the image on load|
|durationFadeIn|	number|	fade-in duration is set up to 500ms by default|
|title	|string	|Passed to the rendered HTML img element|
|alt	|string	|Passed to the rendered HTML img element. Defaults to an empty string, e.g. alt=""|
|crossOrigin	|string	|Passed to the rendered HTML img element|
|className	|string / object	|Passed to the wrapper element. Object is needed to support Glamor’s css prop|
|style	|object	|Spread into the default styles of the wrapper element|
|imgStyle	|object	|Spread into the default styles of the actual img element
|placeholderStyle	|object	|Spread into the default styles of the placeholder img element
|placeholderClassName	|string	|A class that is passed to the placeholder img element
|backgroundColor	|string / bool	|Set a colored background placeholder. If true, uses “lightgray” for the color. You can also pass in any valid color string.
|onLoad	|func	|A callback that is called when the full-size image has loaded.
|onStartLoad	|func	|A callback that is called when the full-size image starts loading, it gets the parameter { wasCached: <boolean> } provided.
|onError	|func	|A callback that is called when the image fails to load.
|Tag	|string	|Which HTML tag to use for wrapping elements. Defaults to div.
|objectFit	|string	|Passed to the object-fit-images polyfill when importing from gatsby-image/withIEPolyfill. Defaults to cover.
|objectPosition	|string	|Passed to the object-fit-images polyfill when importing from gatsby-image/withIEPolyfill. Defaults to 50% 50%.
|loading	|string	|Set the browser’s native lazy loading attribute. One of lazy, eager or auto. Defaults to lazy.
|critical	|bool	|Opt-out of lazy-loading behavior. Defaults to false. Deprecated, use loading instead.

Here are some usage examples:

```
<Img
  fluid={data.file.childImageSharp.fluid}
  alt="Cat taking up an entire chair"
  fadeIn="false"
  className="customImg"
  placeholderStyle={{ `backgroundColor`: `black` }}
  onLoad={() => {
    // do loading stuff
  }}
  onStartLoad={({ wasCached }) => {
    // do stuff on start of loading
    // optionally with the wasCached boolean parameter
  }}
  onError={(error) => {
    // do error stuff
  }}
  Tag="custom-image"
  loading="eager"
/>
```