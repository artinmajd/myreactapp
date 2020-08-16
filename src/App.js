import React from "react";
import "./App.css";
import Cards from "./Cards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Timer from "./timer";
import GuessWords from "./guessWords";
import Fifabaz from "./fifabaz";

const appsList = ["timer", "guesswords", "fifabaz"];
function App() {
  return (
    <Router>
      <div className="page-title">
        <ul className="horizontal">
          <li>
            <Link to="/">Home</Link>
          </li>

          {appsList.map((x) => (
            <li>
              <Link to={`/${x}`}>{`${x[0].toUpperCase()}${x.slice(1)}`}</Link>
            </li>
          ))}
        </ul>
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
        <Route path="/guesswords">
          <GuessWords />
        </Route>
        <Route path="/fifabaz">
          <Fifabaz />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
