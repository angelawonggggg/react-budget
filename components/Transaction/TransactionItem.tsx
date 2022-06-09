import styled from "styled-components";
import { useState } from "react";

type Item = {
  date: string;
  title: string;
  amount: number;
  details: string;
  secondTitle: string;
  transactionType: string;
};
const DateStyle = styled.div`
  color: silver;
  font-size: 12px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemCategory = styled.div`
  font-size: 15px;
  font-weight: bold;
  line-height: 2;
  font-family: "Roboto", sans-serif;
`;

const Amount = styled.div`
  color: green;
  font-size: 1rem;
`;

const TransactionDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 1rem;
`;

export default function TransactionItem({
  date,
  title,
  amount,
  transactionType,
}: Item) {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  const transactionDate = [
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    newDate.getDate(),
  ].join("-");

  return (
    <Box>
      <input type="checkbox" />

      <TransactionDetailsContainer>
        <Items>
          <DateStyle>{transactionDate}</DateStyle>
          <ItemCategory>{title}</ItemCategory>
        </Items>

        {transactionType === "income" ? (
          <Amount>+${amount}</Amount>
        ) : (
          <div>${amount}</div>
        )}
      </TransactionDetailsContainer>
    </Box>
  );
}
