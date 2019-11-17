import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { useDispatch, useSelector, Provider } from "react-redux";
const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
      break;
    case "decreament":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
const sotre = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={sotre}>
      <div className="App">
        <Parent />
      </div>
    </Provider>
  );
}

function Parent() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  function incr() {
    dispatch({
      type: "increament"
    });
  }

  function decr() {
    dispatch({
      type: "decreament"
    });
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => incr()}> +</button>
      <button onClick={() => decr()}> -</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
