import styled from "styled-components";
import { LargeCloseIcon, MotionIcon } from "components/styles/Icon";
import { AnimatePresence, motion, useCycle, useAnimation } from "framer-motion";
import { BigCard } from "components/styles/ContainerStyle";
import { useState } from "react";
import TransactionForm from "components/TransactionForm";

const HeadArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SubTitleArea = styled(HeadArea)`
  margin: 2rem 0;
`;

const PlusIcon = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;
const Title = styled.div`
  color: grey;
`;

const TypeTitle = styled.div`
  margin: 0 1rem;
  padding: 0.5rem 1rem;
`;

const ActiveTitle = styled(TypeTitle)`
  border-radius: 25px;
  border: 1px solid grey;
  background-color: grey;
  color: white;
`;
export default function AddTransaction({ setUpdateData }) {
  const [type, setType] = useState("Expense");
  const [cardOpen, setCardOpen] = useState(false);

  const handleType = (e: any) => {
    setType(e.target.innerHTML);
  };
  const handleCardOpen = () => {
    if (!cardOpen) {
      setCardOpen(true);
    } else setCardOpen(false);
  };

  return (
    <main>
      {cardOpen && (
        <AnimatePresence>
          <BigCard
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
            }}
          >
            <HeadArea>
              <LargeCloseIcon onClick={handleCardOpen} />
              <Title>New Transaction</Title>
            </HeadArea>
            <SubTitleArea>
              {type === "Expense" ? (
                <ActiveTitle onClick={handleType}>Expense</ActiveTitle>
              ) : (
                <TypeTitle onClick={handleType}>Expense</TypeTitle>
              )}
              {type === "Income" ? (
                <ActiveTitle onClick={handleType}>Income</ActiveTitle>
              ) : (
                <TypeTitle onClick={handleType}>Income</TypeTitle>
              )}
              {type === "Transfer" ? (
                <ActiveTitle onClick={handleType}>Transfer</ActiveTitle>
              ) : (
                <TypeTitle onClick={handleType}>Transfer</TypeTitle>
              )}
            </SubTitleArea>
            {type === "Expense" && (
              <TransactionForm
                setUpdateData={setUpdateData}
                setCardOpen={setCardOpen}
                postType="Expense"
              />
            )}
            {type === "Income" && (
              <TransactionForm
                setUpdateData={setUpdateData}
                setCardOpen={setCardOpen}
                postType="Income"
              />
            )}
            {type === "Transfer" && (
              <TransactionForm
                setUpdateData={setUpdateData}
                setCardOpen={setCardOpen}
                postType="Transfer"
              />
            )}
          </BigCard>
        </AnimatePresence>
      )}
      {!cardOpen && (
        <PlusIcon>
          <MotionIcon image={"icons/plus.png"} action={handleCardOpen} />
        </PlusIcon>
      )}
    </main>
  );
}
