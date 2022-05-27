import Header from "./Header";
import { Account } from "models/accounts";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
      <Header />

      <div className="main">{children}</div>
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session;
    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
        props: {
          user: user,
        },
      };
    }
    return { props: { user } };
  },
  sessionOptions
);
