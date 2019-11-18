import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllUsers } from "./actions/users.actions";

class App extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    let usersList = this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
    return (
      <div className="App">
        <h2>List of users</h2>
        <ul>{usersList}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // get the reduced state
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // dispatch the action
    getAllUsers: bindActionCreators(getAllUsers, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
