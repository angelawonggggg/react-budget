import Link from "next/link";
import styled from "styled-components"

export default function NotFound() {
    const NotFound = styled.section`
        text-align: center;
    `
    const Anchor = styled.a`
    color: blue;
    cursor: pointer;
  `;


  return (
    <div>
      <NotFound>
          <h1>Oooooooops</h1>
          <h2>That page cannot be found</h2>
          <p>Go back to the <Link href="/"><Anchor>homepage</Anchor></Link></p>
      </NotFound>
    </div>
  );
}
