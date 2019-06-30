import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class logout extends Component {
  logout = async () => {
    await fetch("/users/logout");
    // .then(res => console.log(res))
    // .catch(err => console.log(err));
  };
  iflogout() {
    return this.props.isSelected && this.props.openDetail
      ? this.logout()
      : null;
  }
  render() {
    var isSelected = this.props.isSelected
      ? {
          background: "black",
          color: "white"
        }
      : {};
    this.iflogout();
    if (this.props.isSelected && this.props.openDetail) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ ...this.props.style, ...isSelected }}>
        <p>登出</p>
      </div>
    );
  }
}
