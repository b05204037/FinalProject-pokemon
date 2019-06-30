import React, { Component, Fragment } from "react";

export default class AttackView extends Component {
  render() {
    console.log(this.props.roleInfo.player.attack);
    return (
      <Fragment>
        {this.props.roleInfo.player.attack.map((attack, key) => (
          <div
            style={this.props.attackSelect === key ? selectedItem : itemStyle}
            key={key}
          >
            {attack.name}
          </div>
        ))}
        <div style={this.props.attackSelect === 4 ? selectedItem : itemStyle}>
          返回
        </div>
      </Fragment>
    );
  }
}

var itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  background: "#aaa",
  width: "90%",
  height: "80px",
  margin: "5% 0",
  fontSize: "1.5em"
};

var selectedItem = {
  ...itemStyle,
  background: "black",
  color: "white"
};
