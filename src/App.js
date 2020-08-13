import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Cards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Timer from "./timer";
import GuessWords from "./guessWords";

const appsList = ["timer", "guessWords"];
function App() {
  return (
    <Router>
      <div className="page-title">
        <ul className="horizontal">
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
        <Link className="titr" to="/">
          Projects so Far{" "}
        </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="background">
            <Cards apps={appsList} />
          </div>
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/guessWords">
          <GuessWords />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
