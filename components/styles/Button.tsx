import styled from "styled-components";
import { motion } from "framer-motion";


const Button = styled(motion.button)`
    display: block;
    background: #138BFC;
    color: white;
    margin: 1em 0;
    padding: 0.25em 1em;
    border: 2px solid #138BFC;
    border-radius: 3px;
    cursor: pointer;
  }`;

const DelButton = styled(Button)`
  background-color: red;
`;

export const BasicButton = ({ children, action }) => {
  return (
    <Button
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={action}
    >
      {children}
    </Button>
  );
};

export const DeleteButton = ({ children, action }) => {
  return <DelButton onClick={action}>{children}</DelButton>;
};
