import React, { Component } from "react";
import Enemy from "./enemy";
import map1 from "../../img/map1-2.png";

class map extends Component {
  render() {
    var style = {
      position: "absolute",
      left: this.props.position.left + "px",
      top: this.props.position.top + "px",
      transitionProperty: "top left",
      transitionDuration: "300ms",
      transitionTimeingFunction: "linear"
    };
    return (
      <div style={style}>
        <Enemy
          enemy={this.props.enemy[0]}
          characterPositionInMap={this.props.characterPositionInMap}
        />
        <img src={map1} />
      </div>
    );
  }
}
export default map;
