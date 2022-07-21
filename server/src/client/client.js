import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter, Route } from "react-router-dom";
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector("#root")
);
