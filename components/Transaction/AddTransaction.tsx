import styled from "styled-components";
import { LargeCloseIcon, MotionIcon } from "components/styles/Icon";
import { AnimatePresence, motion, useCycle, useAnimation } from "framer-motion";
import { BigCard } from "components/styles/ContainerStyle";
import { useState } from "react";
import TransactionForm from "components/Transaction/TransactionForm";
// import { prependOnceListener } from "process";

const HeadArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SubTitleArea = styled(HeadArea)`
  margin: 2rem 0;
`;

const PlusIcon = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;
const Title = styled.div`
  color: grey;
`;

const TypeTitle = styled.div`
  background: ${(props) => (props.active ? "grey" : "none")};
  color: ${(props) => (props.active ? "white" : "black")};
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 25px;
  border: 1px solid grey;
`;

const ActiveTitle = styled(TypeTitle)`
  border-radius: 25px;
  border: 1px solid grey;
  background-color: grey;
  color: white;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
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
        <Overlay>
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
                  <TypeTitle active onClick={handleType}>
                    Expense
                  </TypeTitle>
                ) : (
                  <TypeTitle onClick={handleType}>Expense</TypeTitle>
                )}
                {type === "Income" ? (
                  <TypeTitle active onClick={handleType}>
                    Income
                  </TypeTitle>
                ) : (
                  <TypeTitle onClick={handleType}>Income</TypeTitle>
                )}
              </SubTitleArea>
              {type === "Expense" && (
                <TransactionForm
                  setUpdateData={setUpdateData}
                  setCardOpen={setCardOpen}
                  postType="Expense"
                  transactionType="expense"
                />
              )}
              {type === "Income" && (
                <TransactionForm
                  setUpdateData={setUpdateData}
                  setCardOpen={setCardOpen}
                  postType="Income"
                  transactionType="income"
                />
              )}
            </BigCard>
          </AnimatePresence>
        </Overlay>
      )}
      {!cardOpen && (
        <PlusIcon>
          <MotionIcon image={"icons/plus.png"} action={handleCardOpen} />
        </PlusIcon>
      )}
    </main>
  );
}
