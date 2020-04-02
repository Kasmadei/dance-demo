import React from "react";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk'
import mainReducer from "./services/reducer";
import { applyMiddleware, createStore } from "redux";

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware))

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
