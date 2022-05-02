import styled from "styled-components";
import { motion } from "framer-motion";
import { HeaderMenuLink } from "../components/styles/StyledLink";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const Navbar = styled(motion.div)`
  margin: 20px 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  border-bottom: 1px solid #ddd;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 46px;
  left: 0;
  z-index: 2;
  color: white;
`;

export default function Menu(props) {
  return (
    <Navbar onClick={props.handleShowMenu} animate={{ opacity: 1 }}>
      <HeaderMenuLink href={"/home"}>Home</HeaderMenuLink>
      <HeaderMenuLink href={"/account"}>Account</HeaderMenuLink>
      <HeaderMenuLink href={"/statistics"}>Statistics</HeaderMenuLink>
      <HeaderMenuLink href={"/setting"}>Setting</HeaderMenuLink>
    </Navbar>
  );
}
