import styled from "styled-components";

export const Icon = styled.span`
    font-size: 20px;
    margin: 0 5px;
    color: ${ (props) => props?.color || "gray" };
`

export const IconFocus = styled.span`
    color: black;
`

