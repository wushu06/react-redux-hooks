import React from "react";
import { useDispatch } from "react-redux";

function Parent() {
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
      <button onClick={() => incr()}> +</button>
      <button onClick={() => decr()}> -</button>
    </div>
  );
}

export default Parent;
