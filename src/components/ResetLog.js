import React, { Component } from "react";
import "./ResetLog.css";

export default class ResetLog extends Component {
  render() {
    return (
      <div>
        <button className="ResetLog" onClick={this.props.resetRollLog}>
          Reset
        </button>
      </div>
    );
  }
}
