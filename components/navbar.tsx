import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
    const Navbar = styled.nav`
    margin: 10px auto 80px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-bottom: 1px solid #ddd;
    `;

  return (
    <Navbar>
      <div>
      <Link href="/home">Home</Link>
      <Link href="/account">Account</Link>
      <Link href="/statistics">Statistics</Link>
      <Link href="/setting">Setting</Link>    
      </div>
    </Navbar>
  );
}