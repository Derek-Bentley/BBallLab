import React from "react";
import "./Standings.css"; // Import your CSS file

class Standings extends React.Component {
  renderConferenceTeams(teams, conferenceTitle, conferenceColor) {
    return (
      <div className="standings-conference">
        <h2 className={`conference-title ${conferenceColor}`}>{conferenceTitle}</h2>
        <ol className="team-list">
          {teams.map((team, index) => (
            <li className="team" key={index}>
              <span className="team-name">{team.name}</span>
              <span className="team-record">{team.record}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  render() {
    const eastTeams = [
      {
        name: "Milwaukee Bucks",
        record: "58-24",
        conference: "East",
        color: "#00471B",
      },
      {
        name: "Boston Celtics",
        record: "53-29",
        conference: "East",
        color: "#007A33",
      },
      {
        name: "Philadelphia 76ers",
        record: "51-31",
        conference: "East",
        color: "#006BB6",
      },
      {
        name: "Cleveland Cavaliers",
        record: "22-50",
        conference: "East",
        color: "#860038",
      },
      {
        name: "New York Knicks",
        record: "41-31",
        conference: "East",
        color: "#006BB6",
      },
      {
        name: "Brooklyn Nets",
        record: "52-30",
        conference: "East",
        color: "#000000",
      },
      {
        name: "Atlanta Hawks",
        record: "41-31",
        conference: "East",
        color: "#E03A3E",
      },
      {
        name: "Miami Heat",
        record: "48-34",
        conference: "East",
        color: "#98002E",
      },
      // ... other teams
    ];
    
    const westTeams = [
      {
        name: "Denver Nuggets",
        record: "47-35",
        conference: "West",
        color: "#0E2240",
      },
      {
        name: "Memphis Grizzlies",
        record: "38-44",
        conference: "West",
        color: "#5D76A9",
      },
      {
        name: "Sacramento Kings",
        record: "35-47",
        conference: "West",
        color: "#5A2D81",
      },
      {
        name: "Phoenix Suns",
        record: "61-21",
        conference: "West",
        color: "#1D1160",
      },
      {
        name: "LA Clippers",
        record: "47-35",
        conference: "West",
        color: "#C8102E",
      },
      {
        name: "Golden State Warriors",
        record: "39-43",
        conference: "West",
        color: "#006BB6",
      },
      {
        name: "LA Lakers",
        record: "42-40",
        conference: "West",
        color: "#552583",
      },
      {
        name: "Minnesota Timberwolves",
        record: "26-56",
        conference: "West",
        color: "#005083",
      },
      // ... other teams
    ];
    


    return (
      <div className="standings-container">
        <div className="standings-section">
          <div className="standings-content">
            {this.renderConferenceTeams(eastTeams, "Eastern Conference", "east-conference")}
            {this.renderConferenceTeams(westTeams, "Western Conference", "west-conference")}
          </div>
        </div>
        <div className="summary-section">
          <h2 className="summary-header">2022-2023 NBA Season Summary</h2>
          <p className="summary-text">
            This season has been full of excitement and surprises. With intense matchups and standout performances,
            the NBA teams have shown their determination and skill on the court. From record-breaking victories to
            unexpected upsets, fans have witnessed unforgettable moments throughout the season.
          </p>
        </div>
      </div>
    );
  }
}

export default Standings;
