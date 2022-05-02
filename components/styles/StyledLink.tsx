import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  margin: 0.5rem 0 0 1rem;
  padding: 0.5rem 0 1rem 0.5rem;
  &:active {
    color: black;
    background-color: white;
  }
`;

const MenuLink = styled(StyledLink)`
  border-bottom: 0.5px solid white;
  &:last-child {
    border-bottom: none;
  }
`;

export const RouterLink = ({ href, children }) => (
  <Link href={href}>
    <StyledLink>{children}</StyledLink>
  </Link>
);

export const HeaderMenuLink = ({ href, children }) => (
  <Link href={href}>
    <MenuLink>{children}</MenuLink>
  </Link>
);
