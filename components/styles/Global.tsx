import { createGlobalStyle } from "styled-components";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import styled from "styled-components";

export const ToggleIcon = styled.span`
  font-size: 25px;
  color: ${(props) => props.color || ""};
  vertical-align: middle;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} || "white";
    transition: all 0.50s linear;
  }
  `;
