import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Link to="/users/login">LoginPage</Link>
        <br />
        <Link to="/users/register">Register</Link>
      </div>
    );
  }
}


export default HomePage
