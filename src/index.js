import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import Routes from "./routes.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById("root")
);
serviceWorker.unregister();
