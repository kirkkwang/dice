import React, { Component } from "react";
import Dice from "./components/Dice";
import Rolls from "./components/Rolls";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { roll: "", rollsLogged: [] };
  }

  diceRoll = () => {
    let randomRoll = Math.floor(Math.random() * 6) + 1;
    let resultsArray = this.state.rollsLogged;
    resultsArray.unshift(randomRoll);
    this.setState({
      roll: randomRoll,
      rollsLogged: resultsArray,
    });
  };

  resetRollLog = () => {
    this.setState({ rollsLogged: [] });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Dice Roller</h1>
        <div className="App__DiceAndRoll">
          <Dice
            roll={this.state.roll}
            diceRoll={this.diceRoll}
            resetRollLog={this.resetRollLog}
          />
          <Rolls
            rollsLogged={this.state.rollsLogged.map((roll, idx) => (
              <p key={idx}>{`Roll #${
                this.state.rollsLogged.length - idx
              }: ${roll}`}</p>
            ))}
          />
        </div>
      </div>
    );
  }
}
