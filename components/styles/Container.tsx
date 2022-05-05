import styled from "styled-components";
import { TiEdit } from "react-icons/ti";

type AccountDetail = {
  title: string;
  balance: number;
  onEdit: (event: React.MouseEvent<SVGAElement>) => void;
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px #ccc;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  left: 0;
  right: 0;
`;

export const PageTopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px;
  `;

const AccountCard = styled.div`
display: flex;
align-items: baseline;
flex-direction: column;
margin-left: auto;
margin-right: auto;
padding: 10px;
background: powderblue;
border-radius: 5px;
max-width: 500px;
position: relative;
  `;

const AccountCardIcon = styled.div`
  position: absolute;
  right: 10px;
  font-size: 0.8em;

  &:hover {
    cursor: pointer;
  }
`;

const AccountDetailName = styled.h1`
  font-size: 15px;
  display: block;
`;

const Balance = styled.div`
  font-size: 15px;
  margin-top: 10px;
`



export const AccountDetailCard = ({ title, balance, onEdit }: AccountDetail) => (
 
  <AccountCard>
         <AccountCardIcon>
      <TiEdit onClick={onEdit}/>
    </AccountCardIcon>
    
    <AccountDetailName>{title}</AccountDetailName>
    <Balance>{"Balance: $" + balance}</Balance>
  </AccountCard>

);





