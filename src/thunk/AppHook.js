import React, { useEffect } from "react";
import { getAllUsers } from "./actions/users.actions";
import { useSelector, useDispatch } from "react-redux";
const AppHook = () => {
  const users = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const usersList = () => {
    return users.users.map(user => <li key={user.id}>{user.name}</li>);
  };
  return <div className="App">{users && usersList()}</div>;
};

export default AppHook;
