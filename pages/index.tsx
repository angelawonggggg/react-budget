import Head from "next/head";
import Link from "next/link";
import { SpecialLink } from "components/styles/StyledLink";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { User } from "models/auth";
import Login from "components/LogIn";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session;
    if (!user?.isLoggedIn) {
      return {
        props: {
          user: null,
        },
      };
    }
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

      <div>
        <div>{user?.isLoggedIn && <div>{user?.login} Logged in</div>}</div>
        {!user?.isLoggedIn && (
          <div>
            <Login />
            <div>
              New here?
              <Link href="/signUp">
                <SpecialLink>Sign up</SpecialLink>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
