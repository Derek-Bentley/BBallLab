import React, { Component } from "react";
import "./home.css";
import "./banner.png";
import { Link } from "react-router-dom"; 
import bol from "./bol.png";
import "./effect.png";
import footer from "./footer.png";

class Home extends Component {
  render() {
    const nbaTeams = [
      { name: "Atlanta Hawks", primaryColor: "#E03A3E" },
      { name: "Boston Celtics", primaryColor: "#007A33" },
      { name: "Brooklyn Nets", primaryColor: "#000000" },
      { name: "Charlotte Hornets", primaryColor: "#1D1160" },
      { name: "Chicago Bulls", primaryColor: "#CE1141" },
      { name: "Cleveland Cavaliers", primaryColor: "#860038" },
      { name: "Dallas Mavericks", primaryColor: "#00538C" },
      { name: "Denver Nuggets", primaryColor: "#0E2240" },
      { name: "Detroit Pistons", primaryColor: "#C8102E" },
      { name: "Golden State Warriors", primaryColor: "#1D428A" },
      { name: "Houston Rockets", primaryColor: "#CE1141" },
      { name: "Indiana Pacers", primaryColor: "#002D62" },
      { name: "LA Clippers", primaryColor: "#1D428A" },
      { name: "Los Angeles Lakers", primaryColor: "#552583" },
      { name: "Memphis Grizzlies", primaryColor: "#5D76A9" },
      { name: "Miami Heat", primaryColor: "#98002E" },
      { name: "Milwaukee Bucks", primaryColor: "#00471B" },
      { name: "Minnesota Timberwolves", primaryColor: "#005083" },
      { name: "New Orleans Pelicans", primaryColor: "#0C2340" },
      { name: "New York Knicks", primaryColor: "#006BB6" },
      { name: "Oklahoma City Thunder", primaryColor: "#007AC1" },
      { name: "Orlando Magic", primaryColor: "#0077C0" },
      { name: "Philadelphia 76ers", primaryColor: "#006BB6" },
      { name: "Phoenix Suns", primaryColor: "#1D1160" },
      { name: "Portland Trail Blazers", primaryColor: "#E03A3E" },
      { name: "Sacramento Kings", primaryColor: "#5A2D81" },
      { name: "San Antonio Spurs", primaryColor: "#C4CED4" },
      { name: "Toronto Raptors", primaryColor: "#CE1141" },
      { name: "Utah Jazz", primaryColor: "#002B5C" },
      { name: "Washington Wizards", primaryColor: "#E31837" }
    ];

    return (
      <div className="home-container">
      <div className="main-content">
        <h2>Welcome to Basketball Reference!</h2>
        <p className="intro">
          Basketball-Reference.com is an invaluable resource for writers, number-crunchers, and fans.
          It puts all the necessary statistical and biographical information on NBA and ABA players and coaches a mouse click away.
          "Basketball-Reference.com is the single most valuable reference tool for anyone who is a fan of the NBA."
        </p>
        <p className="pre">
          <strong>Click Below</strong> to view Predictions for the Upcoming 2023-2024 NBA Season Or Search Any NBA Player
        </p>
        <p>
            {/* Button to go to Predictions page */}
            <Link to="/predictions" className="predictions-button">
              Go to Predictions
            </Link>
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search NBA Player" />
          <button>Search</button>
        </div>

        <h2>Today's NBA Fact</h2>
        <p className="intro">
          Muggsy Bogues was the shortest player to ever play in the NBA. He also played with the tallest player to ever play, Manute Bol!
          <img src = {bol}
            alt = " Manute"
          ></img>
        </p>
        <div className="foot">
          <img src = {footer}
            alt = " Add"
          ></img>
        </div>


      </div>
        <div className="team-dropdown">
          <h3>NBA Teams</h3>
          <select>
            <option>Select a team</option>
            {nbaTeams.map((team, index) => (
              <option
                key={index}
                style={{ backgroundColor: team.primaryColor, color: 'white' }}
              >
                {team.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
export default Home;

