import React, { Component } from "react";
import img from "../../img/playerFront.png";

class character extends Component {
  render() {
    // console.log(this.props.facing)
    var style = {
      // background: "white",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      position: "absolute",
      top: this.props.characterPositionInMap.top.toString() + "px",
      left: this.props.characterPositionInMap.left.toString() + "px",
      textAlign: "center"
      // transform: "rotate("+(90+this.props.facing).toString()+"deg)",
    };
    return (
      <div style={style}>
        <img
          src={this.props.playerImg[this.props.facing]}
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      </div>
    );
  }
}

export default character;
