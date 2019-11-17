import { combineReducers } from "redux";

const initialState = {
  count: 0,
  name: ""
};

function countReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };

    case "decreament":
      return { ...state, count: state.count - 1 };
    default:
      return initialState;
  }
}

function nameReducer(state = { name: "" }, action) {
  switch (action.type) {
    case "insert":
      return { ...state, name: action.payload };
    default:
      return { ...state };
  }
}

export default combineReducers({
  countReducer,
  nameReducer
});
