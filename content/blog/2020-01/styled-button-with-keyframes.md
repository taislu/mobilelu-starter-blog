---
title: "Styled Button with keyframes"
date: "2020-01-01"
description: A styled button using keyframes to control the intermediate steps in a CSS animation sequence.
category: Styled-Components
---

[Using CSS Animations](https://www.taislu.com/2019-12/using-css-animations/)

### Define styles for keyframes along the animation sequence

**animation-move.js**  
```js
import { keyframes } from 'styled-components';

export const MoveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6rem); }
  100% {
    opacity: 1;
    transform: translate(0); } 
`

export const MoveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem); }
  80% {
    transform: translateX(3rem); }
  100% {
    opacity: 1;
    transform: translate(0); } 
`

export const MoveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem); }
  80% {
    transform: translateX(-3rem); }
  100% {
    opacity: 1;
    transform: translate(0); } 
`
```

### Styled ButttonMove 
**onStart : moves in from Left, Right or Bottom**  
**onHover : moves Up**  
**onClick : moves Down**  

```js
import styled from 'styled-components';
import { MoveInRight, MoveInLeft, MoveInBottom } from "./animation-move"

export const ButtonMove = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  font-size: 1.6rem;
  border-radius: 10rem;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 1em 1em;
  padding: 1.5rem 4rem;  
  transition: 0.5s all ease-out;

  &:hover { /* mouse over */
    background-color: palevioletred;
    color: white;
    transform: translateY(-10px); /* move up */
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
       /* 0 x-axis, 2rem blur, 0.2 opacity */
  }

  &:active, &:focus { /* user clicked */
    background-color: tomato;
    color: white;
    outline: none;
    transform: translateY(10px); /* move down */
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); 
  }

  /*animation: 1s ${MoveInBottom} ease-out;*/
  /*animation: 1s ${MoveInLeft} ease-out;*/
  animation: 1s ${MoveInRight} ease-out;
`;
```