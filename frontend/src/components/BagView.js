import React, { Component, Fragment } from "react";

class BagView extends Component {
  render() {
    return (
      <Fragment>
        {this.props.character.characterBag.map((item, key) => (
          <div
            style={this.props.bagSelect === key ? selectedItem : itemStyle}
            key={key}
          >
            <span>{item.name}</span>
          </div>
        ))}
        <div style={this.props.bagSelect === 2 ? selectedItem : itemStyle}>
          返回
        </div>
      </Fragment>
    );
  }
}

export default BagView;

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
