import React, { Component } from "react";
import lebron from './lebron.svg';
import kobe from './kobe.svg';
import kareem from './kareem.svg';
import karl from './karl.svg';
import "./Scorers.css"; // Import your CSS file

class Scorers extends Component {
  render() {
    const players = [
      { name: "LeBron James", points: "38,652 Points", image: lebron, description: "One of the greatest players in NBA history." },
      { name: "Kareem Abdul-Jabbar", points: "38,387 Points", image: kareem, description: "Legendary center with an unstoppable skyhook." },
      { name: "Karl Malone", points: "36,928 Points", image: karl, description: "One of the most dominant power forwards in history." },
      { name: "Kobe Bryant", points: "33,643 Points", image: kobe, description: "The Black Mamba, known for his scoring and competitiveness." },
      // Add more players here following the same structure
    ];

    return (
      <div>
        <h2>The NBA's All-Time Scorers</h2>
        <div className="scorers-list">
          <ol>
            {players.map((player, index) => (
              <li key={index} className="scorer">
                <div className="scorer-info">
                  <span className="scorer-name">{player.name}</span>
                  <p className="scorer-points">{player.points}</p>
                </div>
                <img src={player.image} alt={player.name} className="player-image"></img>
                <p className="player-description">{player.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Scorers;
