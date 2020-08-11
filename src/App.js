import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Cards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Timer from "./timer";

const appsList = ["timer"];
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="background">
            <div className="page-title">Projects so Far </div>
            <Cards apps={appsList} />
          </div>
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
