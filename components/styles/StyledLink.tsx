import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

type Link = {
  href: string;
  children: string;
};

const MenuLink = styled.div`
  margin: 0.5rem 0 0 1rem;
  padding: 0.5rem 0 1rem 0.5rem;
  border-bottom: 0.5px solid white;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: gray;
  }
`;

export const SpecialLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #138bfc;
`;

export const HeaderMenuLink = ({ href, children }: Link) => (
  <Link href={href}>
    <MenuLink>{children}</MenuLink>
  </Link>
);
