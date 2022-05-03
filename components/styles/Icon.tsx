import styled from "styled-components";
import motion from "framer-motion";
import { VscGrabber, VscChromeClose, VscTriangleLeft } from "react-icons/vsc";
// import { BsPatchPlusFill } from "react-icons/bs";

export const Icon = styled.span`
  font-size: 20px;
  margin: 0 5px;
  color: ${(props) => props?.color || "gray"};
`;

export const IconFocus = styled.span`
  color: black;
`;

export const MenuIcon = styled(VscGrabber)`
  transform: scale(2);
`;

export const LargeCloseIcon = styled(VscChromeClose)`
  transform: scale(1.5);
  position: absolute;
  right: 2rem;
`;
export const MoveBackIcon = styled(VscTriangleLeft)`
  transform: scale(2);
`;

// export const AddItemsIcon = styled(motion.img)`
//   width: 4rem;
//   position: absolute;
//   bottom: 2rem;
//   right: 2rem;
// `;
