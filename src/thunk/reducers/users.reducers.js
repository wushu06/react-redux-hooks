import { FETCH_USERS } from "../actions/users.actions";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      //action.payload the response (data)
      return [...state, ...action.payload];
    default:
      return state;
  }
};
