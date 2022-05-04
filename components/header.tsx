import styled from "styled-components";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = styled.nav`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.a`
  font-family: impact;
  font-size: 1.5em;
  color: #138bfc;
  cursor: pointer;
  margin: 0 20px;
  border-bottom: 5px dotted;
`;

export default function Header() {
  return (
    <Navbar>
      <Menu />
      <Link href="/">
        <Logo>Budget</Logo>

        {/* Swapping elements */}
      </Link>
    </Navbar>
  );
}
