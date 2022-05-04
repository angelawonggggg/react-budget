import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

type PopupContainer = {
  title: string;
  items: Array<string>;  
}

export const ChartContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 70vw;
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

export const IconWrapper = styled.div`
  text-align: end;
  margin: 15px 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  padding: 5px 0;

`;

const DeleteIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    color: gray;
`

const Item = styled.div`
  width: 100%;
  padding: 10px 5px;

  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

export const PopupContainer = ( {title, items}: PopupContainer )  => (
  <div>
    <Wrapper>
    <DeleteIcon><TiDelete /></DeleteIcon>
      <Title>{title}</Title>
        {" "}
        {items?.map((item, id) => (
          <Item key={id}>{item}</Item>
        ))}
    </Wrapper>
  </div>
);
