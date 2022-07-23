import React from "react";
import "babel-polyfill";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "../helpers/createStore";
import reducers from "./reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { renderRoutes } from "react-router-config";

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
