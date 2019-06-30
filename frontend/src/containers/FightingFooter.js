import React, { Component } from "react";
import FightingPrepareArea from "./FightingPrepareArea";
import FightingControlArea from "./FightingControlArea";
import FightingTextArea from "./FightingTextArea";

class FightingFooter extends Component {
  state = { prepareArrow: 0 };

  movePrepareArrow = e => {
    this.setState({ prepareArrow: (this.state.prepareArrow + e + 3) % 3 });
  };

  render() {
    console.log(this.props.text);
    if (this.props.text.upper == "" && this.props.text.lower == "") {
      return (
        <div className="Fighting-Footer">
          <FightingControlArea
            attack={this.props.attack}
            moveArrow={this.props.moveArrow}
            arrowPosition={this.props.arrowPosition}
            playerExecuteAttack={this.props.playerExecuteAttack}
            displayState={
              this.props.displayState == "control" ? "visible" : "hidden"
            }
            goToPrepare={this.props.goToPrepare}
          />
          <FightingPrepareArea
            displayState={
              this.props.displayState == "prepare" ? "visible" : "hidden"
            }
            prepareArrow={this.state.prepareArrow}
            movePrepareArrow={this.movePrepareArrow}
            goToFight={this.props.goToFight}
            skipClass={this.props.skipClass}
          />
        </div>
      );
    } else {
      return (
        <div className="Fighting-Footer">
          <FightingControlArea
            attack={this.props.attack}
            moveArrow={this.props.moveArrow}
            arrowPosition={this.props.arrowPosition}
            playerExecuteAttack={this.props.playerExecuteAttack}
            displayState={
              this.props.displayState == "control" ? "visible" : "hidden"
            }
            goToPrepare={this.props.goToPrepare}
          />
          <FightingPrepareArea
            displayState={
              this.props.displayState == "prepare" ? "visible" : "hidden"
            }
            prepareArrow={this.state.prepareArrow}
            movePrepareArrow={this.movePrepareArrow}
            goToFight={this.props.goToFight}
            skipClass={this.props.skipClass}
          />
          <FightingTextArea
            text={this.props.text}
            displayState={
              this.props.displayState == "text" ? "visible" : "hidden"
            }
          />
        </div>
      );
    }
  }
}

export default FightingFooter;
