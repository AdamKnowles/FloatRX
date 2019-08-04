import React, { Component } from "react";
import APImanager from "../../modules/APImanager";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };

  handleLogin = event => {
    event.preventDefault();

    APImanager.getAll("users").then(userList => {
      let tempUserName = userList.find(
        each =>
          each.username.toLowerCase() === this.state.username.toLowerCase() &&
          each.password.toLowerCase() === this.state.password.toLowerCase()
      );
      if (tempUserName) {
        sessionStorage.setItem("userId", tempUserName.id);
        this.props.login();
        this.props.history.push("/profile");
      } else {
        window.alert(
          "Login information is wrong. You probably spelled something incorrectly, but if not, register a new account."
        );
      }
    });
  };

  handleRegister = event => {
    event.preventDefault();

    APImanager.getAll("users").then(userList => {
      let isMatch = userList.find(
        each =>
          each.username.toLowerCase() === this.state.username.toLowerCase()
      );
      if (isMatch) {
        window.alert(
          "Username exists, please choose a new one"
        );
      } else if (
        userList.find(
          each =>
            each.password.toLowerCase() === this.state.password.toLowerCase()
        )
      ) {
        window.alert("Choose a new password");
      } else if (this.state.username === "" || this.state.password === "") {
        window.alert("OOPS! You left a field blank!");
      } else {
        let user = {
          username: this.state.username,
          password: this.state.password
        };
        this.props
          .register(user)
          .then(() => APImanager.getAll("users"))
          .then(r => r.find(user => user.username === this.state.username))
          .then(matchedUserInfo =>
            sessionStorage.setItem("userId", matchedUserInfo.id)
          )
          .then(() => this.props.login())
          .then(() => this.props.history.push("/profile"))
          
      }
    });
  };

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleLogin}>
          
          <div className="card-body">
            
            <input
              onChange={this.handleFieldChange}
              type="text"
              id="username"
              placeholder="Username"
              required
              autoFocus=""
              className="form-control mb-2"
            />
            
            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required
              className="form-control"
            />
          </div>
          <div className="card-footer login-button-div">
            <button
              className="mr-2 btn btn-secondary btn-md login-button"
              onClick={this.handleLogin}
            >
              Sign In
            </button>
            <button
              id="reg"
              className="btn  btn-secondary btn-md login-button"
              onClick={this.handleRegister}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
