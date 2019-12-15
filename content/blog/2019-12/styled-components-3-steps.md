---
title: "Styled Components: The Essentials Explained in 3 Steps"
date: "2019-12-15"
description: How to create and use a Styled Component, How to modify your CSS conditionally with props, How to create Global Styling.
category: Styled-Components
---

[Styled Components: The Essentials Explained in 3 Steps](https://www.freecodecamp.org/news/styled-components-essentials-in-three-steps/)

### How to create and use a Styled Component
```bash
npm i styled-components
```

```
import React from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  button {
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;
`;

const Login = () => (
  <StyledLogin>
    <h2>Login</h2>
    <StyledInput type="text" placeholder="email" />
    <StyledInput type="password" placeholder="password" />
    <button>Login</button>
  </StyledLogin>
);

export default Login;
```
Now we have imported an object called styled that we can use to style our components. This object has different properties that you can use depending on what you want to style. If it is a div, like in our example, you just simply access the div property on the styled object. Like so: styled.div  

If you want to style a button you can simply type styled.button instead.
Or if it was an h2 tag you can type styled.h2  

These properties are holding functions that you can call with tagged template literals. Meaning that we can send in the data to these functions by using back-ticks and then put our CSS between these back-ticks (``). You also create a const to hold the Styled Component.

In short, to create styling for a div element with Styled Components you just use this syntax:
```
const SomeName = styled.div` CSS code goes here … `; 
```
Then you can just use it as a regular component:
```
<SomeName> Your other code here … </SomeName>
```

One more thing about creating a standard Styled Component that’s good to know is the nesting part. Styled Components have the ability to nest styling just like you can do in, for example, SASS. As you can see in the above code that I have nested my styling for the h2 and the button elements.

### How to modify your CSS conditionally with props
Styled components can receive props. Just like a regular Component. By passing in props to your Styled Component you can do some conditional CSS styling.

```
const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;
  background: ${prop => prop.correct ? 'white' : 'red'};
`;

const Login = () => (
  <StyledLogin>
    <h2>Login</h2>
    <StyledInput correct={true} type="text" placeholder="email" />
    <StyledInput correct={false} type="password" placeholder="password" />
    <button>Login</button>
  </StyledLogin>
);
```

### How to create Global Styling

Global styling is achieved by using a special function for this purpose from the Styled Components library. It’s called createGlobalStyle.

```
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #000;
    color: #fff;
  }
`;

const App = () => {
  <>
    <GlobalStyle />
    <Login />
  </>
}
```

You just place the global style component at the top level of your application. Then, it will use the style throughout your App. In this case, I assume that the top-level Component is named App. You can also use props and do some conditional CSS in global Styled Components. Just like the regular Styled Components.
