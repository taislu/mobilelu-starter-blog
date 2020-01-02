import React from "react"
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 100%;
    margin: 0 auto;
    
    border-radius: 20px;
    

    h2 {
        margin: 1rem;
        font-size: 1.5rem;
    }

    h3 {
        margin: 1rem;
        font-size: 1rem;
    }

`

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1.5rem;
  width: 90%;
  box-sizing: border-box;
  outline: none;
  color: darkseagreen;

  @media only screen and (min-width: 768px) {
      width: 60%;
  }

`;

const StyledTextarea = styled.textarea`
  border: 1px solid #000;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1.5rem;
  width: 90%;
  box-sizing: border-box;
  outline: none;
  color: royalblue;

  @media only screen and (min-width: 768px) {
      width: 60%;
  }
`

const ButtonRipple = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 10rem;
  height: 3.5rem;
  text-transform: uppercase;
  
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

const Contact = () => {
  return (
    <StyledForm action="https://formspree.io/taislu@hotmail.com" method="POST">
        <StyledInput type="text" name="name" id="name" placeholder="your name" />
        <StyledInput type="text" name="email" id="email" placeholder="your email" />
        <StyledTextarea name="message" id="message" rows="5" placeholder="your message" />
        <ButtonRipple primary type="submit" >Submit</ButtonRipple>
    </StyledForm>
  )
}

export default Contact