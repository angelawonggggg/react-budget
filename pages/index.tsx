import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import LogIn from "../components/LogIn";
import styled from "styled-components";
import Image from "next/image";
import { SpecialLink } from "components/styles/StyledLink";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { User } from "models/auth";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    return {
      props: {
        user: req.session.user ?? {},
      },
    };
  },
  sessionOptions
);

const Wrapper = styled.section`
margin-left: auto;
margin-right: auto;
display: flex;
`;




export default function Home({ user } : { user: User }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Budget</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <div className="card">
          <LogIn />
          <div>
            New here?
            <Link href="/signUp">
              <SpecialLink>Sign up</SpecialLink>
            </Link>
          </div>
        </div>
        <Image src="/" width="4" height="3" className="card"></Image>
      </Wrapper>
    </div>
  );
}
