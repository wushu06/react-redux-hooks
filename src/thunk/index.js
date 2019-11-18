import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./store";
import AppHook from "./AppHook";

let storeInstance = Store();

const Thunk = () => {
  return (
    <Provider store={storeInstance}>
      {/*<App /> */}
      <AppHook />
    </Provider>
  );
};

export default Thunk;
/*
* the setup
- Provider 
- store
- createStore
    - reducer
    - middleware
- action where the magic will happen
- reducer which magic you want to happen

* now in the component
- mapDispatchToProps start the magic
- mapStateToProp get the magic
 */
