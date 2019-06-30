import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  }
  //   handleSubmit = async e => {
  //     e.preventDefault();
  //     await fetch("/users/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         email: this.state.email,
  //         passward: this.state.password
  //       })
  //     });
  //   };

  render() {
    return (
      <div className="form">
        <div className="box">
          <h2>Register</h2>
          <form action="/users/register" method="post" id="register-form">
            <div className="inputBox">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <label htmlFor="name">name</label>
            </div>
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <label htmlFor="email">email</label>
            </div>
            <br />
            <div className="inputBox">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <label htmlFor="password">Password</label>
            </div>
            <br />
            <div className="inputBox">
              <input
                type="password"
                name="password2"
                value={this.state.password2}
                onChange={e => this.setState({ password2: e.target.value })}
              />
              <label htmlFor="password2">Password again</label>
            </div>
            <br />
          </form>
          {this.props.msg ? <span>* {this.props.match.params.msg}</span> : ""}
          <input type="submit" value="Submit" form="register-form" />
          <Link to="/">HomePage</Link>
        </div>
      </div>
    );
  }
}
