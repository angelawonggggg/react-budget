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
const Title = styled.div``;

const TypeTitle = styled.div`
  margin: 0 1rem;
`;
export default function AddTransaction() {
  const [open, cycleOpen] = useCycle(false, true);
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
            <HeadArea>
              <TypeTitle onClick={handleType}>Expense</TypeTitle>
              <TypeTitle onClick={handleType}>Income</TypeTitle>
              <TypeTitle onClick={handleType}>Transfer</TypeTitle>
            </HeadArea>
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
