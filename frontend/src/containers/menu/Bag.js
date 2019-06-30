import React, { Component } from "react";
import BagView from "../../components/BagView";

export default class pokemonDetail extends Component {
  checkBag() {
    return this.props.isSelected && this.props.openDetail
      ? this.props.openBag()
      : null;
  }
  render() {
    var isSelected = this.props.isSelected
      ? {
          background: "black",
          color: "white"
        }
      : {};
    this.checkBag();
    return (
      <div style={{ ...this.props.style, ...isSelected }}>
        <p>包包</p>
        {/* {this.props.isSelected && this.props.openDetail ? (
          <BagView character={this.props.character} />
        ) : null} */}
      </div>
    );
  }
}
