import React, { Component } from "react";
import lebron from './lebron.svg';
import kobe from './kobe.svg';
import kareem from './kareem.svg';
import karl from './karl.svg';
class Scorers extends Component {
  render() {
    return (
      <div>
        <h2>The NBA's All-Time Scorers</h2>
          <div className="NBA">
            <ol>
              <li>LeBron James 
                <p>38,652 Points	</p>
                <img src={lebron} alt ="Lebron Picture" className="player-image"></img>
              </li>
              <li>Kareem Abdul-Jabbar 
                <p>38,387 Points	</p>
                <img src={kareem} alt ="Kareem Picture" className="player-image"></img>
              </li>
              <li>Karl Malone 
                <p>36,928 Points</p>
                <img src={karl} alt ="Karl Picture" className="player-image"></img>
                </li>
              <li>Kobe Bryant 
                <p>33,643 Points</p>
                <img src={kobe} alt ="Kobe Picture" className="player-image"></img>               
                </li>
            </ol>
          </div>
          
        
      </div>
    );
  }
}
 
export default Scorers;