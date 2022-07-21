import { createStore, applyMiddleWare } from "redux";
import thunk from "redux-thunk";

export default () => {
  const store = createStore(reducers, {}, applyMiddleWare(thunk));

  return store;
};
