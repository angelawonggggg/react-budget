import styled from "styled-components";
import { motion } from "framer-motion";
import { ButtonType } from "../../utils/type";


const Button = styled(motion.button)`
    display: block;
    background: #138BFC;
    color: white;
    margin: 1em 0;
    padding: 0.25em 1em;
    border: 2px solid #138BFC;
    border-radius: 3px;
    cursor: pointer;
    height: 2.5rem;
  }`;

const DelButton = styled(Button)`
  background-color: red;
`;


export const BasicButton = ({ children }: ButtonType) => {
  return (
    <Button
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.5 }}
    >
      {children}
    </Button>
  );
};

export const DeleteButton = ({ children }: ButtonType) => {
  return <DelButton>{children}</DelButton>;
};
