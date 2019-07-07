import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../Routes/Home";
import Sidebar from "./Sidebar";
import routes from "../Routes/routes";
import Statistics from "../Routes/Statistics";
import Manage from "../Routes/Manage";

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    {isLoggedIn && (
      <>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/statistics" exact component={Statistics} />
          <Route path="/manage" exact component={Manage} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    )}
  </Router>
);

AppRouter.propTyes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
