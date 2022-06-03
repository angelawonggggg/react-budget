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
  position: fixed;
  top: 50%;
  left: 5vw;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 2px 2px 2px grey;
  border-radius: 15px;
  height: 70vh;
  width: 90vw;
  z-index: 2;
  overflow: scroll;
  transform: translateY(-50%) !important;
`;
export const BoxWithTextAndInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin: 1rem 0;
`;
