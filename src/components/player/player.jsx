import React from "react";
import "../main-game/style.css";

class Player extends React.Component {
  render() {
    return (
      <div className={this.props.isActive ? "active" : "hidden"}>
        <h1 className="title">Player 1</h1>
        {/*    <h1 className="currentSum">{this.props.isPlayer1 ? this.props.currentSum : 0}</h1> */}

        <h1 style={{ color: "pink" }}>{this.props.totScore}</h1>

        <h1>{this.props.isPlayer1 ? this.props.currentSum : 0 || this.props.isPlayer2 ? this.props.currentSum : 0}</h1>

        {/*   <h1 className="currentSum">{this.props.isPlayer2 ? this.props.currentSum : 0}</h1> */}
      </div>
    );
  }
}

export default Player;

// <div className={`player-container ${this.props.isActive ? "active" : "hidden"}`}>
