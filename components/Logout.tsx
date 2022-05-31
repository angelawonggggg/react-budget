import React from "react";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { User } from "models/auth";
import { useRouter } from "next/router";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session;
    if (user?.isLoggedIn === false) {
      return {
        redirect: {
          destination: "/",
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

export default function Logout({ user }: { user: User }) {
  const router = useRouter();
  console.log(user);
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      body: JSON.stringify({}),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Logout successful");
        } else {
          console.log("Logout failed");
        }
      })
      .finally(() => {
        router.push("/");
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
