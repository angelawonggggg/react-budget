import styled from "styled-components";
import { LargeCloseIcon } from "components/styles/Icon";
import { AnimatePresence, motion, useCycle, useAnimation } from "framer-motion";
import { BigCard } from "components/styles/ContainerStyle";
import { useState } from "react";
import TransactionForm from "components/TransactionForm";
const PlusLogo = styled(motion.img)`
  width: 3.5rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;
const HeadArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SubTitleArea = styled(HeadArea)`
  margin: 2rem 0;
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
export default function AddTransaction() {
  const animation = useAnimation();
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
  async function sequence() {
    await animation.start({ rotate: -90 });
    await animation.start({ scale: 1.5 });
    await animation.start({ rotate: 0 });
    animation.start({ scale: 1 });
  }
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
              <TransactionForm setCardOpen={setCardOpen} postType="Expense" />
            )}
            {type === "Income" && (
              <TransactionForm setCardOpen={setCardOpen} postType="Income" />
            )}
            {type === "Transfer" && (
              <TransactionForm setCardOpen={setCardOpen} postType="Transfer" />
            )}
          </BigCard>
        </AnimatePresence>
      )}
      {!cardOpen && (
        <PlusLogo
          src="icons/plus.png"
          whileHover={sequence}
          animate={animation}
          onClick={handleCardOpen}
        />
      )}
    </main>
  );
}
