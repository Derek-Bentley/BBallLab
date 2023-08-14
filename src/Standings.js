import React, { Component } from "react";
 
class Standings extends Component {
  render() {
    return (
      <div>
      <div className="East">
        <h2>Eastern Conference</h2>
        <ol>
          <li>Milwaukee Bucks</li>
          <li>Boston Celtics</li>
          <li>Philadelpia 76ers</li>
          <li>Cleveland Cavaliers</li>
          <li>New York Knicks</li>
          <li>Brooklyn Nets</li>
          <li>Atlanta Hawks</li>
          <li>Miami Heat</li>
        </ol>
      </div>

      <div className="West">
        <h2>Western Conference</h2>
          <ol>
            <li>Denver Nuggets</li>
            <li>Memphis Grizzlies</li>
            <li>Sacramento Kings</li>
            <li>Phoenix Suns</li>
            <li>LA Clippers</li>
            <li>GS Warriors </li>
            <li>LA Lakers</li>
            <li>Minnesota Timberwolves</li>
          </ol>
      </div>
      </div>
    );
  }
}
 
export default Standings;