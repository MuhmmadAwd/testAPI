import { applyMiddleware, compose, createStore } from "redux";

import thunk from "redux-thunk";
import Reducer from "../Reducer/Reducer";
let MiddleWare = [thunk];

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(...MiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
