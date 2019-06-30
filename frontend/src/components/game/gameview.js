import React, { Component } from "react";
import Character from "./character";
import Map from "./map";
import Menu from "../../containers/menu";

class gameview extends Component {
  style = {
    background: "black",
    width: "1000px",
    height: "800px",
    position: "absolute",
    top: "0px",
    left: "50%",
    transform: "translateX(-50%)",
    overflow: "hidden"
  };

  facing() {
    var img;
    const moving = this.props.character.moving;
    const ImgOneTwo = this.props.character.movingImgOneTwo;
    const nowFacing = this.props.character.characterFacing;
    if (nowFacing.top) ImgOneTwo ? (img = 4) : (img = 5);
    if (nowFacing.down) ImgOneTwo ? (img = 6) : (img = 7);
    if (nowFacing.left) ImgOneTwo ? (img = 8) : (img = 2);
    if (nowFacing.right) ImgOneTwo ? (img = 9) : (img = 3);
    if (!moving && nowFacing.top) img = 0;
    if (!moving && nowFacing.down) img = 1;
    if (!moving && nowFacing.left) img = 2;
    if (!moving && nowFacing.right) img = 3;
    return img;
  }

  render() {
    this.facing();
    return (
      <div style={this.style}>
        <Map
          map={this.props.map.name}
          enemy={this.props.map.enemy}
          position={this.props.position}
          characterPositionInMap={this.props.character.characterPositionInMap}
        />
        <Character
          facing={this.facing()}
          playerImg={this.props.playerImg}
          characterPositionInMap={this.props.character.characterPositionInMap}
        />
        {this.props.openMenu ? (
          <Menu
            character={this.props.character}
            bagUse={this.props.bagUse}
            Data={this.props.Data}
            useItem={this.props.useItem}
            roleInfo={this.props.roleInfo}
          />
        ) : null}
      </div>
    );
  }
}

export default gameview;
