/** @format */

import React from "react";
import { Home, Login, Authentication } from "./screens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Authentication} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}
