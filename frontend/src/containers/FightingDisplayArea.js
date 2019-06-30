import React, { Component } from "react";
import InfoCard from "../components/InfoCard";
import PlayPic from "../img/Player2.png";
import EnemyPic from "../img/RicBattle.png";

class FightingDisplayArea extends Component {
  state = {};
  render() {
    return (
      <div className="Fighting-Display-Area">
        <div className="Fighting-Display-Left">
          <InfoCard roleInfo={this.props.roleInfo.enemy} />
          <img
            src={PlayPic}
            style={{
              height: "450px",
              width: "600px",
              position: "absolute",
              top: "140px",
              visibility: this.props.imgFlicker.my, 
            }}
          />
        </div>
        <div className="Fighting-Display-Right">
          <img
            src={EnemyPic}
            style={{
              width: "400px",
              height: "450px",
              position: "absolute",
              left: "600px",
              visibility: this.props.imgFlicker.enemy, 
            }}
          />
          <InfoCard roleInfo={this.props.roleInfo.player} />
        </div>
      </div>
    );
  }
}

export default FightingDisplayArea;
