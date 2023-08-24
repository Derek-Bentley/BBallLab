import React, { Component } from "react";
import "./Predictions.css"; // Import your CSS file

class Predictions extends Component {
  render() {
    return (
      <div className="predictions-container">
        <h2 className="predictions-title">Predictions</h2>
        <ul className="prediction-list">
          <li className="award">Rookie of The Year</li>
          <p className="player-name">Victor Wembanyama</p>
          <p className="player-case">
            Victor Wembanyama has shown exceptional skills and potential as a young player. His versatility, shot-blocking abilities, and impact on both ends of the court make him a strong contender for the Rookie of The Year award. As he adapts to the NBA level and continues to develop, he could make a significant impact on his team and stand out among rookies.
          </p>

          <li className="award">Most Valuable Player</li>
          <p className="player-name">LeBron James</p>
          <p className="player-case">
            LeBron James has consistently been one of the league's top players and leaders. His ability to impact games in various ways, including scoring, playmaking, and leadership, makes him a perennial MVP candidate. If he continues to lead his team to success and maintain his high level of performance, he has a strong chance of securing another MVP title.
          </p>

          <li className="award">Most Improved Player</li>
          <p className="player-name">Ben Simmons</p>
          <p className="player-case">
            Ben Simmons has already demonstrated his skills as an elite defender and playmaker. If he continues to refine his offensive game, particularly his shooting, he could take his abilities to the next level. A significant improvement in his scoring and all-around impact on his team could make him a prime candidate for the Most Improved Player award.
          </p>

          <li className="award">Defensive Player of the Year</li>
          <p className="player-name">Matisse Thybulle</p>
          <p className="player-case">
            Matisse Thybulle's defensive prowess and ability to disrupt opponents' plays have garnered attention. His steals, blocks, and overall defensive impact make him a standout candidate for the Defensive Player of the Year award. If he continues to excel in shutting down opponents and contributing to his team's defensive success, he could earn this prestigious recognition.
          </p>
        </ul>
      </div>
    );
  }
}

export default Predictions;
