import React from "react";
import { useDispatch } from "react-redux";

function Name() {
  const dispatch = useDispatch();
  function handlChange(event) {
    dispatch({
      type: "insert",
      payload: event.target.value
    });
  }
  return (
    <div>
      <input type="text" onChange={handlChange} />
    </div>
  );
}

export default Name;
