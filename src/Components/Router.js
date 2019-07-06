import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PropTypes from "prop-types";

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    {!isLoggedIn && (
      <>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/start" component={Start} />
        </Switch>
      </>
    )}

    {isLoggedIn && (
      <>
        <Switch>
          <Route path="/" exact component={Home} />

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
