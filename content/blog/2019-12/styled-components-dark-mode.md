---
title: "Add dark mode using gatsby-styled-components-dark-mode plugin"
date: "2019-12-14"
description: A quick reference to add dark/ligt switch with styled components, react toggle component, and gatsby-styled-components-dark-mode plugin
category: Playground
---

### Create a new site using gatsby default starter

```bash
mkdir playground
cd playground
gatsby new play-dark-mode
cd play-dark-mode
gatsby develop
localhost:8000
```

### Install node modules & Configure plugin

[Gatsby Styled-Components Dark Mode](https://www.gatsbyjs.org/packages/gatsby-styled-components-dark-mode/) is a Gatsby plugin that handles injecting a dark and light theme, as well as functionality for toggling between them. It also persists the state of your users’ dark option in their browsers.

```bash
npm install react-toggle-component gatsby-styled-components-dark-mode
npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

gatsby-config.sys
```
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-styled-components-dark-mode`,
    `gatsby-plugin-react-helmet`,
```

### Add Toggle component

Somewhere in your app, you’ll want to provide functionality to actually change the theme from one theme to the other. The plugin exposes this functionality through **ThemeManagerContext**. Consuming the context will get you access to

| prop | type | description |
| ---- | ---- | ----------- |
| **isDark** | boolean | state that describes if your app is in dark mode or not |
| **toggleDark** | () => void |	function that toggles dark/light mode |

The Gatsby dark/light theme can be accessed via the useContext hook inside the **Header** function (below). The theme's toggleDark() will be called when the
[React toggle switch component](https://reactjsexample.com/react-toggle-switch-component/) is clicked.

src/components/header.js
```
import React, { useContext } from "react"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { Toggle } from "react-toggle-component"

const Header = ({ siteTitle }) => {

  const themeContext = useContext(ThemeManagerContext)

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Toggle
          leftBackgroundColor="white"
          rightBackgroundColor="black"
          borderColor="black"
          knobColor="tomato"
          name="toggle-switch"
          onToggle={() => themeContext.toggleDark()}
        />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}
```

### Add createGlobalStyle

We can now utilize the power of styled-components. Any component wrapped in a styled or css has access to your theme. In theme you’ll also have access to isDark which cane be used to do conditionally styling inside the styled components.

The [createGlobalStyle](https://www.styled-components.com/docs/api#createglobalstyle) is a helper function to generate a special StyledComponent that handles **global** styles. Normally, styled components are automatically scoped to a local CSS class and therefore isolated from other components. In the case of **createGlobalStyle**, this limitation is removed and things like CSS resets or base stylesheets can be applied.

In layout.js, the color and background can be set to dark or light color based on the **theme.isDark** from the props. 

src/components/layout.js
```
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
body {
  color: ${props => props.theme.isDark ? "#ffffff" : "#262626"};
  background: ${props => props.theme.isDark ? "#262626" : "#ffffff"};
}
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
```

### Comment out css color setting 

The color setting in layout.css needs to be commented out since the color will be set globally now for dark or light mode.

src/components/layout.css
```css
body {
  /*color: hsla(0, 0%, 0%, 0.8);*/
```