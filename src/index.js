import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserContextProvider from "./Context/UserContext";
import RegisterContextProvider from "./Context/RegisterContext";

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById("root")
);
