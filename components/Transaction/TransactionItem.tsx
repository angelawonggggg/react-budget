import styled from "styled-components";
import { GiReceiveMoney } from "react-icons/gi";
import { Icon } from "../styles/Icon";

type Item = {
  date: string;
  title: string;
  amount: number;
  details: string;
  secondTitle: string;
  transactionType: string;
};
const TitleData = styled.div`
  color: silver;
  font-size: 15px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemCategory = styled.div`
  font-size: 17px;
  font-weight: bold;
  line-height: 2;
  font-family: "Roboto", sans-serif;
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
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  const transactionDate = [
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    newDate.getDate(),
  ].join("-");
  return (
    <Box>
      <TitleData>{transactionDate}</TitleData>
      <Items>
        <ItemCategory>{title}</ItemCategory>

        {transactionType === "income" ? (
          <Amount>+${amount}</Amount>
        ) : (
          <div>${amount}</div>
        )}
      </Items>

      {transactionType === "income" ? (
        <Icon>
          <GiReceiveMoney />
        </Icon>
      ) : (
        ""
      )}
    </Box>
  );
}
