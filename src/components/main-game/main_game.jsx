import React from "react";
import "./style.css";
import NewGameButton from "../New-Game-Button/NewGameButton.jsx";
import Player from "../player/player.jsx";
import DiceDisplay from "../dice-display/DiceDisplay.jsx";
import RollDice from "../roll-dice/RollDice.jsx";
import HoldTurn from "../hold-turn/HoldTurn.jsx";

class Main_Game extends React.Component {
  state = {
    inputValue: "",
    currentSum: 0,
  };

  getCurrentSum = (sum) => {
    this.setState(() => {
      return { currentSum: sum };
    });
  };

  render() {
    return (
      <div className="main-container">
        <NewGameButton />
        <div className="main-inner-container">
          <Player currentSum={this.state.currentSum} />
          <div className="diceTools">
            <DiceDisplay />
            <RollDice getCurrentSumOnClick={this.getCurrentSum} />
            <div>{`this is${this.state.currentSum}`}</div>
            <HoldTurn />
          </div>
          <Player />
        </div>
      </div>
    );
  }
}

export default Main_Game;

// <HoldTurn />
// <Player />
