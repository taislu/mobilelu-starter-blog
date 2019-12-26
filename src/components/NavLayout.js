import React from 'react'
import PropTypes from 'prop-types'

import { createGlobalStyle } from 'styled-components'
import Navbar from './Navbar'
import NavFooter from './NavFooter'

import "typeface-lato";

const NavLayout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Navbar />
    {children}
    <NavFooter />
  </div>
)

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* gatsby-styled-components-dark-mode 
   Any component wrapped in a styled or css has access to your theme!
*/

body {
  font-family: lato, 'Open Sans', sans-serif;
  /*color:#262626;*/   /* gray */
  /*color:#263826;*/   /* green https://www.w3schools.com/colors/colors_hexadecimal.asp */
  /*background:#fff;*/ /* white */
  color: ${props => props.theme.isDark ? "#ffffff" : "#262626"};
  background: ${props => props.theme.isDark ? "#262626" : "#ffffff"};
}
`

NavLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavLayout
