import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { VscGrabber, VscChromeClose, VscTriangleLeft } from "react-icons/vsc";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { Theme } from "../../utils/type";

export const Icon = styled.span`
  font-size: ${(props) => (props.size ? "20px" : "15px")};
  margin: 0 5px;
  color: ${(props) => props?.color || props?.theme.text.secondary};
  cursor: pointer;
`;

export const IconFocus = styled.span`
  color: black;
`;

export const MenuIcon = styled(VscGrabber)``;

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

const ToggleIcon = styled.span`
  font-size: 30px;
  color: ${(props) => props.color || ""};
  vertical-align: middle;
  position: absolute;
  right: 10px;
  z-index: 11;
`;

export const ToggleTheme = ({ toggleTheme, isDark }: Theme) => (
  <>
    {isDark ? (
      <ToggleIcon>
        <BsToggleOff onClick={toggleTheme} />
      </ToggleIcon>
    ) : (
      <ToggleIcon>
        <BsToggleOn onClick={toggleTheme} />
      </ToggleIcon>
    )}
  </>
);
