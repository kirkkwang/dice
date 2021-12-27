import React, { Component } from "react";
import ResetLog from "./ResetLog";
import oneDice from "./dice_svg/dice-six-faces-one.svg";
import twoDice from "./dice_svg/dice-six-faces-two.svg";
import threeDice from "./dice_svg/dice-six-faces-three.svg";
import fourDice from "./dice_svg/dice-six-faces-four.svg";
import fiveDice from "./dice_svg/dice-six-faces-five.svg";
import sixDice from "./dice_svg/dice-six-faces-six.svg";
import "./Dice.css";

export default class Dice extends Component {
  diceFaces = (roll) => {
    switch (roll) {
      case 1:
        return { backgroundImage: `url(${oneDice})` };
      case 2:
        return { backgroundImage: `url(${twoDice})` };
      case 3:
        return { backgroundImage: `url(${threeDice})` };
      case 4:
        return { backgroundImage: `url(${fourDice})` };
      case 5:
        return { backgroundImage: `url(${fiveDice})` };
      default:
        return { backgroundImage: `url(${sixDice})` };
    }
  };

  render() {
    return (
      <>
        <div className="Dice">
          <button
            className="Dice__Square"
            style={this.diceFaces(this.props.roll)}
            onClick={this.props.diceRoll}
          ></button>
          <h2 className="Header2">Click Box to Roll</h2>
          <ResetLog
            className="ResetLog"
            resetRollLog={this.props.resetRollLog}
          />
        </div>
      </>
    );
  }
}
