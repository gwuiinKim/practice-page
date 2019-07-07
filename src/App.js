import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import GlobalStyles from "./Styles/GlobalStyles";
import { useUser } from "./Context/UserContext";
import AppRouter from "./Components/Router";

export default () => {
  const { isLoggedIn } = useUser();
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <AppRouter isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};
