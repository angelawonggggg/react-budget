import Head from "next/head";
import Link from "next/link";
import { SpecialLink } from "components/styles/StyledLink";
import { FormWrapper } from "components/styles/Container";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { User } from "models/auth";
import Login from "components/logIn";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user=null } = req.session;
    return { props: { user } };
  },

  sessionOptions
);

export default function LandingPage({ user }: { user: User }) {
  return (
    <div>
      <Head>
        <title>React Budget</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormWrapper>
        {user?.isLoggedIn && <div>{user?.login} Logged in</div>}
        {!user?.isLoggedIn && (
          <>
            <Login />
            <div>
              <div>
                New here?{" "}
                <Link href="/signUp" passHref>
                  <SpecialLink>Sign up</SpecialLink>
                </Link>
              </div>
            </div>
          </>
        )}
      </FormWrapper>
    </div>
  );
}
