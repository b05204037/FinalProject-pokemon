import React, { Component } from "react";

export default class save extends Component {
  saveData = async data => {
    let res = await fetch("/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: data
      })
    });
    let Data = res.json();
    return Data;
  };
  saveAll() {
    return this.props.isSelected && this.props.openDetail
      ? this.saveData(this.props.Data)
      : null;
  }

  render() {
    var isSelected = this.props.isSelected
      ? {
          background: "black",
          color: "white"
        }
      : {};
    this.saveAll(this.props.Data);
    return (
      <div style={{ ...this.props.style, ...isSelected }}>
        <p>存檔</p>
      </div>
    );
  }
}
