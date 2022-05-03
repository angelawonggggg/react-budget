import styled from "styled-components";
import { motion } from "framer-motion";

export const SmallCard = styled.div`
  display: block;
  width: 40vw;
  height: 30vw;
  margin: 10px;
`;

export const MainCard = styled.div`
  display: block;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const BigCard = styled(motion.section)`
  position: absolute;
  top: 2rem;
  left: 5vw;
  background-color: white;

  box-shadow: 2px 2px 2px grey;
  border-radius: 15px;
  height: 100vh;
  width: 90vw;
  z-index: 2;
`;
