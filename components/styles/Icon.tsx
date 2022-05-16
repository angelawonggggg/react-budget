import styled from "styled-components";

import { motion, useAnimation } from "framer-motion";

import { VscGrabber, VscChromeClose, VscTriangleLeft } from "react-icons/vsc";
// import { BsPatchPlusFill } from "react-icons/bs";
import { MdOutlineStickyNote2 } from "react-icons/md";
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
export const NoteIcon = styled(MdOutlineStickyNote2)`
  transform: scale(2);
  color: grey;
  margin: 0 0.5rem;
`;

const PlusLogo = styled(motion.img)`
  width: 3.5rem;
`;

export const MotionIcon = ({ action, image }) => {
  const animation = useAnimation();
  async function sequence() {
    await animation.start({ rotate: -90 });
    await animation.start({ scale: 1.5 });
    await animation.start({ rotate: 0 });
    animation.start({ scale: 1 });
  }

  return (
    <PlusLogo
      src={image}
      whileHover={sequence}
      animate={animation}
      onClick={action}
    />
  );
};

export const ScrollIcon = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  font-size: 30px;
  cursor: pointer;
`;
