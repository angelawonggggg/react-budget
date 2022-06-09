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
  margin: 0 auto;
  padding: 1rem;
`;

const LogoutButton = styled.div`
  margin: 0 auto;
`;

const RouterList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;
const HeaderMenuIcon = styled(MenuIcon)`
  position: absolute;
  left: 1rem;
`;

const CloseMenuIcon = styled(LargeCloseIcon)`
  position: absolute;
  left: 1rem;
`;

const ProfileIcon = styled.div`
  background-color: orange;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
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
  const formatUsername = username.charAt(0).toUpperCase() + username.slice(1);
  const usernameFirstLetter = formatUsername.charAt(0);

  return (
    <main>
      {open && (
        <Navbar
          onClick={cycleOpen}
          initial={{ width: 0 }}
          animate={{
            width: 200,
          }}
        >
          {" "}
          <ProfileIcon>
            <div>{usernameFirstLetter}</div>
          </ProfileIcon>
          <Profile>{formatUsername}</Profile>
          <LogoutButton>
            <Logout />
          </LogoutButton>
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
