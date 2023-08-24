import React, { Component } from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Scorers from "./Scorers";
import Standings from "./Standings";
import Predictions from "./Predictions";
import emoji from './emoji.svg';
import './main.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app-container">
          <header className="header">
            <h1 className="logo">
              <img alt="bball logo" src={emoji} />
              Basketball Reference
            </h1>
            <nav className="nav">
              <ul className="nav-list">
                <li><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/scorers" className="nav-link" activeClassName="active">All Time Scorers</NavLink></li>
                <li><NavLink to="/standings" className="nav-link" activeClassName="active">Standings</NavLink></li>
                <li><NavLink to="/predictions" className="nav-link" activeClassName="active">Predictions</NavLink></li>
              </ul>
            </nav>
          </header>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/scorers" element={<Scorers />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/standings" element={<Standings />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
