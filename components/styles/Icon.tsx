import styled from "styled-components";
import { VscGrabber, VscChromeClose } from "react-icons/vsc";

export const Icon = styled.span`
    font-size: 20px;
    margin: 0 5px;
    color: ${ (props) => props?.color || "gray" };
`

export const IconFocus = styled.span`
    color: black;
`



export const MenuIcon = styled(VscGrabber)`
  transform: scale(2);
`;

export const LargeClose = styled(VscChromeClose)`
  transform: scale(2);
`;
