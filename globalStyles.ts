import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
     font-family: sans-serif;
     box-sizing: border-box;
     margin: 0;
     padding: 0;
  }

  .main {
     margin: 20px;
  }

  h1 {
     color: #30425E;
  }

  button {
     display: block;
     background: #138BFC;
     color: white;
     margin: 1em 0;
     padding: 0.25em 1em;
     border: 2px solid #138BFC;
     border-radius: 3px;
     cursor: pointer;
  };

  a {
      text-decoration: none;
      margin: 5px 10px;
  };

  label {
     display: block;
     margin: 14px 0 5px 0;
     color: gray;
     font-size: 15px;
  };

  input {
   padding: 5px;
  }

  input:focus {
   outline: none;
   border:1px solid #138BFC;
 }

 .card {
    width: 50%;
 }



`;

export default GlobalStyle;
