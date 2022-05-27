import "../styles/globals.css";
import GlobalStyle from "../globalStyles";
import Layout from "../components/layout";
import React, { useState } from "react";
import { ToggleTheme } from "../components/styles/Icon";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/styles/Global";
import { lightTheme, darkTheme } from "../components/styles/Theme";

function MyApp({ Component, pageProps }) {
  const [isDark, setTheme] = useState(false);
  const themeToggler = () => {
    setTheme(!isDark);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToggleTheme toggleTheme={themeToggler} isDark={isDark} />

      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
