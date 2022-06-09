import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const ToggleIcon = styled.span`
  font-size: 25px;
  color: ${(props) => props.theme.main};
  vertical-align: middle;
  position: fixed;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.bg.primary};
    color: ${(props) => props.theme.text.primary};
    transition: all 0.50s linear;
  };

  .main {
    margin: 20px;
 }

 button {
    display: block;
    background-color: #E94C89;
    color: white;
    margin: 1em 0;
    padding: 0.5em 1em;
    border-radius: 3px;
    cursor: pointer;
    border: none;
 };

 button:hover {
   opacity: 0.8;
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

input[type=checkbox] {
  position: relative;
  cursor: pointer;
}

input[type=checkbox]:before {
  content: "";
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  left: 0;
  background-color:#ffffff;
}

input[type=checkbox]:checked:before {
  content: "";
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  left: 0;
  background-color:#3b3f56;
}
input[type=checkbox]:checked:after {
  content: "";
  display: block;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 2px;
  left: 6px;
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

.react-datepicker {
  border: none;
  box-shadow: 3px 3px lightgrey;
}


.react-datepicker-wrapper, react-datepicker__input-container, {
  width: 95%;
}

.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
  background: #91eaf58c;
}

.react-datepicker__navigation {
  top: 0; 
  margin: 0;
}



  }
  `;
