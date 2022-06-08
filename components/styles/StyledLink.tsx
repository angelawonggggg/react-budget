import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

type Link = {
  href: string;
  children: string;
};

const StyledLink = styled.a`
  margin: 0.5rem 0 0 1rem;
  padding: 0.5rem 0 1rem 0.5rem;
  &:active {
    color: black;
  }
`;

const MenuLink = styled(motion.a)`
  margin: 0.5rem 0 0 1rem;
  padding: 0.5rem 0 1rem 0.5rem;
  border-bottom: 0.5px solid white;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`;
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

export const SpecialLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #138bfc;
`;

export const RouterLink = ({ href, children }: Link) => (
  <Link href={href}>
    <StyledLink>{children}</StyledLink>
  </Link>
);

export const HeaderMenuLink = ({ href, children }: Link) => (
  <Link href={href}>
    <MenuLink whileHover={{ scale: 1.1 }} variants={itemVariants}>
      {children}
    </MenuLink>
  </Link>
);
