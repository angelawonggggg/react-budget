import styled from "styled-components";

type Item = {
  date: string;
  title: string;
  amount: number;
  details: string;
  secondTitle: string;
  transactionType: string;
};
const Titledata = styled.div`
  color: silver;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Amount = styled.div`
  color: green;
  font-size: 1.2rem;
`;

export default function TransactionItem({
  date,
  title,
  amount,
  details,
  secondTitle,
  transactionType,
}: Item) {
  return (
    <Box>
      <Titledata>{date}</Titledata>
      <Items>
        <div>{title}</div>

        {transactionType === "Income" ? (
          <Amount>+${amount}</Amount>
        ) : (
          <div>${amount}</div>
        )}
      </Items>
      <Items>
        <div>{secondTitle}</div>
        <div>{details}</div>
      </Items>
    </Box>
  );
}
