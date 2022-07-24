import React from "react";
import "babel-polyfill";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { renderRoutes } from "react-router-config";

// get the state dumped in the html
console.log(window.INITIAL_STATE, "from window initial state");
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
