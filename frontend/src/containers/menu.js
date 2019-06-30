import React, { Component, Fragment } from "react";
import CharacterDetails from "./menu/characterDetails";
import MiniMap from "./menu/miniMap";
import Bag from "./menu/Bag";
import Save from "./menu/save";
import Logout from "./menu/logout";
import BagView from "../components/BagView";
import AttackView from "../components/AttackView";
class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      openDetail: false,
      openBag: false,
      bagSelect: 0,
      openAttack: false,
      attackSelect: 0
    };
  }
  select = e => {
    const preSelect = this.state.select;
    const preBagSelect = this.state.bagSelect;
    const preAttackSelect = this.state.attackSelect;
    e.preventDefault();
    if (!this.state.openBag) {
      switch (e.keyCode) {
        case 38:
          preSelect === 0 || this.setState({ select: preSelect - 1 });
          break;
        case 40:
          preSelect === 4 || this.setState({ select: preSelect + 1 });
          break;
        default:
          return false;
      }
    } else if (this.state.openBag && !this.state.openAttack) {
      switch (e.keyCode) {
        case 38:
          preBagSelect === 0 || this.setState({ bagSelect: preBagSelect - 1 });
          break;
        case 40:
          preBagSelect === 2 || this.setState({ bagSelect: preBagSelect + 1 });
          break;
        default:
          return false;
      }
    } else if (this.state.openBag && this.state.openAttack) {
      switch (e.keyCode) {
        case 38:
          preAttackSelect === 0 ||
            this.setState({ attackSelect: preAttackSelect - 1 });
          break;
        case 40:
          preAttackSelect === 4 ||
            this.setState({ attackSelect: preAttackSelect + 1 });
          break;
        default:
          return false;
      }
    }
    console.log(this.state.bagSelect);
  };

  openDetail = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.setState({ openDetail: !this.state.openDetail });
      this.state.openDetail && !this.state.openBag
        ? document.removeEventListener("keydown", this.select)
        : document.addEventListener("keydown", this.select);
      if (
        e.keyCode === 13 &&
        this.state.openBag &&
        this.state.bagSelect === 2
      ) {
        this.setState({ openBag: false });
      }
      if (
        e.keyCode === 13 &&
        this.state.openBag &&
        this.state.bagSelect === 0
      ) {
        let amount = this.props.character.characterBag[0].amount;
        this.props.useItem("傷藥", amount);
      }
      if (
        e.keyCode === 13 &&
        this.state.openBag &&
        this.state.bagSelect === 1 &&
        this.state.attackSelect === 4
      ) {
        console.log("ENter");
        this.setState({ openAttack: false });
        this.setState({ attackSelect: 0 });
        console.log(this.state.openAttack);
        // let amount = this.props.character.characterBag[1].amount;
        // this.props.useItem("pp提升藥劑", amount);
      } else if (
        e.keyCode === 13 &&
        this.state.openBag &&
        this.state.bagSelect === 1 &&
        this.state.openAttack
      ) {
        const amount = this.props.character.characterBag[1].amount;
        this.props.useItem("pp提升藥劑", amount, this.state.attackSelect);
        console.log(
          this.props.roleInfo.player.attack[this.state.attackSelect].currentPP
        );
      } else if (
        e.keyCode === 13 &&
        this.state.openBag &&
        this.state.bagSelect === 1
      ) {
        this.setState({ openAttack: true });
      }
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.select);
    document.addEventListener("keydown", this.openDetail);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.select);
    document.removeEventListener("keydown", this.openDetail);
  }

  openBag = () => {
    this.setState({ openBag: true });
  };

  render() {
    return (
      <div style={menuStyle}>
        {this.state.openBag && this.state.openAttack ? (
          <AttackView
            roleInfo={this.props.roleInfo}
            attackSelect={this.state.attackSelect}
          />
        ) : this.state.openBag && !this.state.openAttack ? (
          <BagView
            bagUse={this.props.bagUse}
            character={this.props.character}
            bagSelect={this.state.bagSelect}
            useItem={this.props.useItem}
          />
        ) : (
          <Fragment>
            <MiniMap
              style={itemStyle}
              isSelected={this.state.select === 0}
              openDetail={this.state.openDetail}
            />
            <CharacterDetails
              style={itemStyle}
              isSelected={this.state.select === 1}
              openDetail={this.state.openDetail}
            />
            <Bag
              style={itemStyle}
              isSelected={this.state.select === 2}
              openDetail={this.state.openDetail}
              openBag={this.openBag}
            />
            <Save
              style={itemStyle}
              isSelected={this.state.select === 3}
              openDetail={this.state.openDetail}
              Data={this.props.Data}
            />
            <Logout
              style={itemStyle}
              isSelected={this.state.select === 4}
              openDetail={this.state.openDetail}
            />
          </Fragment>
        )}
      </div>
    );
  }
}
export default menu;

var menuStyle = {
  width: "250px",
  position: "absolute",
  right: "1%",
  top: "2%",
  borderRadius: "10px",
  boxSizing: "border-box",
  border: "double black 5px",
  boxShadow: "3px 3px 10px rgba(0,0,0,0.5)",
  background: "#fefefe",
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
  padding: "0"
};

var itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  background: "#aaa",
  width: "90%",
  height: "80px",
  margin: "5% 0",
  fontSize: "1.5em"
};
