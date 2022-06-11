import styled from "styled-components";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = styled.nav`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.bg.primary};
`;

const Logo = styled.a`
  font-family: impact;
  font-size: 1.5em;
  color: #44719c;
  cursor: pointer;
  margin: 0 20px;
  border-bottom: 5px dotted;
`;

export default function Header({ username }: String) {
  return (
    <Navbar>
      {<Menu username={username} />}

      <Link href="/" passHref>
        <Logo>Budget</Logo>
      </Link>
    </Navbar>
  );
}
