import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import users from "./reducers/users.reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users
});

export default () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};
