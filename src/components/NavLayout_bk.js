import React from 'react'
import PropTypes from 'prop-types'

import { createGlobalStyle } from 'styled-components'
import Navbar from './Navbar'
import NavFooter from './NavFooter'

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
body {
  font-family: 'Open Sans', sans-serif;
  color:#262626;   /* gray */
  /*color:#263826;*/   /* green https://www.w3schools.com/colors/colors_hexadecimal.asp */
  background:#fff; /* white */
}
`

NavLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavLayout
