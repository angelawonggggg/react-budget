import styled from "styled-components";
import { TiEdit } from "react-icons/ti";
import Link from "next/link";
import { AccountDetailBox, AccountTransaction } from "../../utils/type";

export const ChartContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 70vw;
  min-width: 350px;
  margin: 1rem auto;
  background: ${(props) => props.theme.bg.secondary};
  border-radius: 30px;
  padding: 25px;
`;

export const DatepickerContainer = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  text-align: end;
  margin: 15px 10px;
`;

export const NetWorthWrapper = styled.div`
  background-color: ${(props) => props.theme.bg.secondary};
  width: 80%;
  padding: 20px;
  margin: 10px auto;
  border-radius: 10px;
  max-width: 450px;
  text-align: center;
`;

const SmallText = styled.p`
  color: ${(props) => props?.color || "silver"};
  text-align: center;
  font-size: 12px;
`;

export const MainText = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 5px 0;
  color: ${(props) => props.theme.text.primary};
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

export const ItemWrapper = styled.div`
  min-width: 300px;
  margin-bottom: 1rem;
`;

const AccountCard = styled.a`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  margin: 15px auto;
  padding: 15px 30px;
  background: ${(props) => props.theme.bg.secondary};
  color: ${(props) => props.theme.text.secondary};
  border-radius: 40px;
  max-width: 600px;
  position: relative;
  max-width: 500px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.bg.inset};
    cursor: pointer;
  }
`;

const AccountCardIcon = styled.div`
  position: absolute;
  right: 20px;
  font-size: 1em;
  color: ${(props) => props.theme.text.tertiary};

  &:hover {
    cursor: pointer;
  }
`;

const AccountDetailName = styled.h1`
  font-size: 15px;
  display: block;
  cursor: pointer;
  color: ${(props) => props.theme.text.primary};
  margin-top: 0;
`;

const Balance = styled.div`
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.text.secondary};
`;

const Tag = styled.div`
  display: block;
  margin-left: auto;
  background: ${(props) => props?.color || "#e2e1e1"};
  font-size: 10px;
  padding: 5px;
  border-radius: 10px;
  color: whitesmoke;
`;

export const FormWrapper = styled.div`
  width: 40vw;
  margin: 0 auto;
  background: ${(props) => props.theme.bg.secondary};
  padding: 20px;
  border-radius: 15px;
`;

export const AccountDetailCard = ({
  toggleEditForm,
  account,
}: AccountDetailBox) => (
  <AccountCard href={"/accounts/" + account._id}>
    <AccountCardIcon>
      <TiEdit onClick={toggleEditForm} />
    </AccountCardIcon>
    <Link href={"/accounts/" + account._id} passHref>
      <div>
        <AccountDetailName>{account.accountType}</AccountDetailName>
        <Balance>{"Balance: $" + account.balance}</Balance>
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

export const AccountTransactionCard = ({
  transaction,
}: {
  transaction: AccountTransaction;
}) => {
  const { category, amount, date, transactionType } = transaction;
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  const transactionDate = [
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    newDate.getDate(),
  ].join("-");
  return (
    <AccountCard>
      <Tag color={transactionType === "income" ? "#59b259" : "#d14545"}>
        {transactionType}
      </Tag>
      <div>Category: {category}</div>
      <div>Amount: ${amount}</div>
      <div>Date: {transactionDate}</div>
    </AccountCard>
  );
};
