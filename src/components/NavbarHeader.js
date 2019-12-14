import React, {useContext} from 'react'
//import logo from './logo_java.svg'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../utils'

// toggle night mode
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { Toggle } from "react-toggle-component"

export default function NavbarHeader({ handleNavbar }) {

  const themeContext = useContext(ThemeManagerContext)

  return (
    <HeaderWrapper>
      {/* 
      <Link to="/">
        <img src={logo} alt="company logo" />
      </Link>
      */}
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
      {/* toggle night mode */}
      <Toggle
        leftBackgroundColor={themeContext.isDark ? "white" : "black" }
        rightBackgroundColor={themeContext.isDark ? "white" : "black" }
        borderColor="black"
        knobColor="tomato"
        name="toggle-3"
        onToggle={() => themeContext.toggleDark()}
      />

    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`
