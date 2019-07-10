import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserContextProvider from "./Context/UserContext";

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById("root")
);
