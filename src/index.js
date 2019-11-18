import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./Context";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store";
import Thunk from "./thunk";

const sotre = createStore(rootReducer);

function Index() {
  return (
    <div>
      <Provider store={sotre}>
        <App />
      </Provider>
      <hr />
      <Thunk />
      <hr />
      <Context />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
