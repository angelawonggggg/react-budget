import styled from "styled-components";
import { ButtonType } from "../../utils/type";

export const Button = styled.button`
    display: block;
    background-color: ${(props) => props.color || "#138BFC"};
    color: white;
    margin: 1em auto;
    padding: 0.25rem 1em;
    border-radius: 3px;
    cursor: pointer;
    border: none;
  }`;
export const FormButton = styled.button`
  display: block;
  width: 100%;
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
