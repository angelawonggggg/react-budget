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
     background: #E94C89;
     color: white;
     margin: 1em 0;
     padding: 0.5em 1em;
     border-radius: 3px;
     cursor: pointer;
     border: none;
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

 select {
   padding: 5px 0;
   margin: 10px 0;
   width: 100px;
 }

 select:focus {
    border: blue;
 }



`;

export default GlobalStyle;
