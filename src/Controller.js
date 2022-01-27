import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";

const Controller = () => {
  return (
    <div classNam="controller">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Controller;
