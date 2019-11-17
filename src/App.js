import React from "react";
import Parent from "./components/Counter";
import Name from "./components/Name";
import { useSelector } from "react-redux";

function App() {
  const { count, name } = useSelector(state => ({
    ...state.countReducer,
    ...state.nameReducer
  }));
  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>
      <Parent />
      <Name />
    </div>
  );
}

export default App;
