import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/users/login">LoginPage</Link>
        <br />
        <Link to="/users/register">Register</Link>
      </div>
    );
  }
}
