import React from "react";
import { Router, Route } from "react-router";

import App from "./component/app";
import About from "./component/about";
import NotFound from "./component/notfound";

const Routes = (props) => (
  <Router {...props}>
    <Route path="/about" componet={About} />
    <Route path="/" exact={true} component={App} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
