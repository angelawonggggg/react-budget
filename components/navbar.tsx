import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
    const Navbar = styled.nav`
    margin: 20px 0;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #ddd;
    `;

    const Logo = styled.a`
    font-family: impact;
    font-size: 1.5em;
    color: #138BFC;
    cursor: pointer;
    margin: 0 20px;
    border-bottom: 5px dotted;
    `

  return (
    <Navbar>
      <Link href="/"><Logo>Budget</Logo></Link>
      <div>
      <Link href="/home">Home</Link>
      <Link href="/account">Account</Link>
      <Link href="/statistics">Statistics</Link>
      <Link href="/setting">Setting</Link>    
      </div>
    </Navbar>
  );
}