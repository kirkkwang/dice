import React, { Component } from "react";
import "./Rolls.css";

export default class Rolls extends Component {
  render() {
    return (
      <div>
        <h3 className="Header3">Roll Logger</h3>
        <div className="RollResults">
          <div className="RollResults__Log">{this.props.rollsLogged}</div>
        </div>
      </div>
    );
  }
}
