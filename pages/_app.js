import "../styles/globals.css";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import { ToggleTheme } from "../components/styles/Icon";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/styles/Global";
import { lightTheme, darkTheme } from "../components/styles/Theme";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session;
    if (!user?.isLoggedIn) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
        props: {
          user: null,
        },
      };
    }
    return { props: { user } };
  },
  sessionOptions
);

function MyApp({ Component, pageProps, user }) {
  const [isDark, setTheme] = useState(false);
  const themeToggler = () => {
    setTheme(!isDark);
    localStorage.setItem("lightTheme", isDark);
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("lightTheme");
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToggleTheme toggleTheme={themeToggler} isDark={isDark} />

      {
        <Layout user={user}>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      }
    </ThemeProvider>
  );
}

export default MyApp;
