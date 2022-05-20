import styled from "styled-components";

type Hero = {
  income: number;
  expenses: number;
};
const Hero = styled.section`
  background-color: black;
  color: white;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeroList = styled.div`
  width: 30%;
  padding: 2rem 0;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: space-between;
  border-right: 1px solid white;
  &:last-child {
    border-right: none;
  }
`;

const ItemTitle = styled.div`
  color: grey;
  font-size: 0.6rem;
`;
const Item = styled.div``;
export default function TransactionHero({ income, expenses }: Hero) {
  const balance = income - expenses;
  return (
    <Hero>
      <HeroList>
        <Item>${income}</Item>
        <ItemTitle>INCOME</ItemTitle>
      </HeroList>
      <HeroList>
        <Item>${expenses}</Item>
        <ItemTitle>EXPENSES</ItemTitle>
      </HeroList>
      <HeroList>
        <Item>${balance}</Item>
        <ItemTitle>BALANCE</ItemTitle>
      </HeroList>
    </Hero>
  );
}
