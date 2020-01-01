---
title: "Styled Button with Ripple Effect"
date: "2020-01-01"
description: A styled button with ripple effect which provides the visual feedback when users tap a button.
category: Styled-Components
---

[The Hover Effect for Mobile Buttons](https://www.taislu.com/2019-12/hover-effect-for-mobile/)

```js
import styled from "styled-components"

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  /* ripple effect */
  background-position: center;
  transition: background 0.5s;

  &:hover {
     background: darkseagreen radial-gradient(circle, transparent 1%, darkseagreen 1%) center/15000%;
  }
  &:active {
    background-color: yellow;
    background-size: 100%;
    transition: background 0s;
  }

`;
```