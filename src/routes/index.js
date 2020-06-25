import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "../components/Menu/Menu";
import About from "../pages/About";
import Home from "../components/Home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Menu />
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default AppRouter;
