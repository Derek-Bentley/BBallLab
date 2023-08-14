import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Scorers from "./Scorers";
import Standings from "./Standings";
import Predictions from "./Predictions";
import emoji from './emoji.svg';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Basketball Reference</h1>
          <div className="logo">
           <img alt="bball logo" src={emoji} />
          </div>

          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/scorers">All Time Scorers</NavLink></li>
            <li><NavLink to="/standings">Standings</NavLink></li>
            <li><NavLink to="/predictions">Predictions</NavLink></li>
          </ul>
          <div className="content">
	   <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route path="/scorers" element={<Scorers></Scorers>}/>
            <Route path="/predictions" element={<Predictions></Predictions>}/>
            <Route path="/standings" element={<Standings></Standings>}/>
	   </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main
