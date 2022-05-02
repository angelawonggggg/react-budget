import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu";
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

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 1rem;
`;

export default function Header() {
  const [showMenu, useShowMenu] = useState(false);

  const handleShowMenu = () => {
    if (!showMenu) {
      useShowMenu(true);
    } else {
      useShowMenu(false);
    }
  };

  return (
    <Navbar>
      {!showMenu ? (
        <Icon onClick={handleShowMenu} src="icons/menu.png" alt="menu" />
      ) : (
        <Icon onClick={handleShowMenu} src="icons/close.png" alt="close" />
      )}

      <Link href="/">
        <Logo>Budget</Logo>
      </Link>
      {showMenu && <Menu handleShowMenu={handleShowMenu} />}
    </Navbar>
  );
}
