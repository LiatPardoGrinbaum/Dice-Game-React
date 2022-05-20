import React from "react";
import "./style.css";
import NewGameButton from "../New-Game-Button/NewGameButton.jsx";
import Player from "../player/player.jsx";

import RollDice from "../roll-dice/RollDice.jsx";
import HoldTurn from "../hold-turn/HoldTurn.jsx";
import GameOver from "../game-over/gameOver";

class Main_Game extends React.Component {
  state = {
    inputValue: "",
    currentSum: 0,
    player1Turn: true,
    player2Turn: false,
    totalScore1: 0,
    totalScore2: 0,
    isUpdate: true,
    gameOver: false,
  };

  getCurrentSum = (sum) => {
    this.setState((prev) => {
      return { currentSum: prev.currentSum + sum };
    });
  };

  getNextPlayer = (player) => {
    if (player === "player1") {
      this.setState((prev) => {
        return { player1Turn: true, player2Turn: false, currentSum: 0, totalScore2: prev.currentSum + prev.totalScore2 };
      });
      // if (this.state.totalScore1 === 100 || this.state.totalScore1 > 100) {
      //   this.setState({ gameOver: true });
      // }
    }
    if (player === "player2") {
      this.setState((prev) => {
        return { player1Turn: false, player2Turn: true, currentSum: 0, totalScore1: prev.currentSum + prev.totalScore1 };
      });
    }
  };
  componentDidUpdate() {
    if (this.state.isUpdate) {
      if (this.state.totalScore1 > 100 || this.state.totalScore1 === 100) {
        this.setState({ gameOver: true, isUpdate: false });
      } else if (this.state.totalScore2 > 100 || this.state.totalScore2 === 100) {
        this.setState({ gameOver: true, isUpdate: false });
      }
    }
  }
  render() {
    return (
      <div className={`main-container ${this.state.gameOver ? "main-container-light" : null}`}>
        <div className={this.state.gameOver ? "gameOver" : null}></div>
        <NewGameButton />
        <div className="main-inner-container">
          <Player currentSum={this.state.currentSum} isPlayer1={this.state.player1Turn} totScore={this.state.totalScore1} playerTurn="player-turn" isActive={this.state.player1Turn} />
          <div className="diceTools">
            <RollDice getCurrentSumOnClick={this.getCurrentSum} />
            <div>{`this is${this.state.currentSum}`}</div>
            <div>{`player 1 is active? ${this.state.player1Turn}`}</div>
            <div>{`player 2 is active? ${this.state.player2Turn}`}</div>
            <HoldTurn getNextPlayerOnClick={this.getNextPlayer} isPlayer1={this.state.player1Turn} isPlayer2={this.state.player2Turn} />
          </div>
          <Player currentSum={this.state.currentSum} isPlayer2={this.state.player2Turn} totScore={this.state.totalScore2} playerTurn="player-turn" isActive={this.state.player2Turn} />
        </div>
      </div>
    );
  }
}

export default Main_Game;

// <HoldTurn />
// <Player />
