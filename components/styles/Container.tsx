import styled from "styled-components";
import { TiEdit } from "react-icons/ti";
import Link from "next/link";
import { AccountDetail } from "../../utils/type"

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

const NetWorthWrapper = styled.div`
  background-color: whitesmoke;
  width: 80%;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  max-width: 450px;
`;

const SmallText = styled.p`
  color: ${(props) => props?.color || "silver"};
  text-align: center;
  font-size: 12px;
`;

const MainText = styled.p`
  text-align: center;
  font-size: 25px;
  margin: 5px 0;
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
  max-width: 600px;
  position: relative;
  box-shadow: darkgrey 1px 1px 4px;
  max-width: 500px;
  position: relative;
`;

const AccountCardIcon = styled.div`
  position: absolute;
  right: 10px;
  font-size: 1em;

  &:hover {
    cursor: pointer;
  }
`;

const AccountDetailName = styled.h1`
  font-size: 15px;
  display: block;
  cursor: pointer;
`;

const Balance = styled.div`
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
`;

export const AccountDetailCard = ({
  name,
  balance,
  toggleEditForm,
}: AccountDetail) => (
  <AccountCard>
    <AccountCardIcon>
      <TiEdit onClick={toggleEditForm} />
    </AccountCardIcon>
    <Link href="/accounts/1">
      <div>
        <AccountDetailName>{name}</AccountDetailName>
        <Balance>{"Balance: $" + balance}</Balance>
      </div>
    </Link>
  </AccountCard>
);

export const NetWorthCard = ({ total }: any) => (
  <NetWorthWrapper>
    <SmallText>Net Worth</SmallText>
    <MainText>{"$" + total}</MainText>
  </NetWorthWrapper>
);
