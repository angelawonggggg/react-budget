import styled from "styled-components";
import { LargeCloseIcon } from "components/styles/Icon";
import { AnimatePresence, motion, useCycle, useAnimation } from "framer-motion";
import { BigCard } from "components/styles/ContainerStyle";

const PlusLogo = styled(motion.img)`
  width: 3.5rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

export default function AddTransaction() {
  const [open, cycleOpen] = useCycle(false, true);
  const animation = useAnimation();

  async function sequence() {
    await animation.start({ rotate: -90 });
    await animation.start({ scale: 1.5 });
    await animation.start({ rotate: 0 });
    animation.start({ scale: 1 });
  }
  return (
    <main>
      {open && (
        <AnimatePresence>
          <BigCard
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
            }}
          >
            <LargeCloseIcon onClick={cycleOpen} />
          </BigCard>
        </AnimatePresence>
      )}
      {!open && (
        <PlusLogo
          src="icons/plus.png"
          whileHover={sequence}
          animate={animation}
          onClick={cycleOpen}
        />
      )}
    </main>
  );
}
