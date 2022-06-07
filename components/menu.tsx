import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import { MenuIcon, LargeCloseIcon } from "components/styles/Icon";
import { HeaderMenuLink } from "./styles/StyledLink";
import Logout from "./Logout";

const Navbar = styled(motion.nav)`
  margin: 20px 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #4b4849;
  border-bottom: 1px solid #ddd;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 46px;
  left: 0;
  z-index: 2;
  color: white;
`;

const Profile = styled.div`
  margin: 2rem auto;
  background-color: orange;
  padding: 1rem;
`;

const RouterList = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
const HeaderMenuIcon = styled(MenuIcon)`
  position: absolute;
  left: 1rem;
`;

const CloseMenuIcon = styled(LargeCloseIcon)`
  transform: scale(2);
  position: absolute;
  left: 1rem;
`;

const sideVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const links = [
  { children: "Transactions", href: "/home", id: 1 },
  { children: "Accounts", href: "/accounts", id: 2 },
  { children: "Statistics", href: "/statistics", id: 3 },
];

export default function Menu({ username }: String) {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main>
      {open && (
        <Navbar
          onClick={cycleOpen}
          initial={{ width: 0 }}
          animate={{
            width: 320,
          }}
        >
          {" "}
          <Profile>{username}</Profile>
          <RouterList
            className="container"
            initial="closed"
            animate="open"
            variants={sideVariants}
          >
            {links.map(({ href, children }, idx) => (
              <HeaderMenuLink key={idx} href={href} children={children} />
            ))}
          </RouterList>
          <Logout />
        </Navbar>
      )}

      {!open ? (
        <HeaderMenuIcon onClick={cycleOpen} />
      ) : (
        <CloseMenuIcon onClick={cycleOpen} />
      )}
    </main>
  );
}
