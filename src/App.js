import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import Home from "./Routes/Home";
import GlobalStyles from "./Styles/GlobalStyles";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  );
};
