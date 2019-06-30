import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="form">
        <div className="box">
          <h2>Login</h2>
          <form
            action="/users/login"
            method="POST"
            id="login-form"
            onSubmit={this.handleSubmit}
          >
            <div className="inputBox">
              <input
                type="text"
                name="email"
                require="true"
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
              <label htmlFor="email">email</label>
            </div>
            <br />
            <div className="inputBox">
              <input
                type="password"
                name="password"
                require="true"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
              <label htmlFor="Password">Password</label>
            </div>
            <br />
          </form>
          {this.props.msg ? <span>* {this.props.msg}</span> : ""}
          <input type="submit" value="Submit" form="login-form" />
          <br />
          <Link to="/">HomePage</Link>
        </div>
      </div>
    );
  }
}
