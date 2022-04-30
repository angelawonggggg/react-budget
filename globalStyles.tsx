import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button {
     display: block;
     font-size: 1em;
     margin: 1em;
     padding: 0.25em 1em;
     border: 2px solid black;
     border-radius: 3px;
     cursor: pointer;
  };

  a {
      text-decoration: none;
      margin: 5px 10px;
  };

  label {
     display: block;
     margin: 10px 0;
  }
`;


export default GlobalStyle