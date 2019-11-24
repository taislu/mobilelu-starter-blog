import React, { Component } from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../utils'

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://www.facebook.com/tai.lu.568`,
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: `https://twitter.com/taislu`,
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `https://www.instagram.com/tailu92503/`,
      },
      {
        id: 4,
        icon: <FaGithub className="icon github-icon" />,
        path: `https://github.com/taislu`,
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    // margin-right: 2rem;
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }

  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .github-icon {
    color: limegreen;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;
  @media (min-width: 768px) {
    width: 10rem;
    display: flex;
    justify-content: space-around;
  }
`
