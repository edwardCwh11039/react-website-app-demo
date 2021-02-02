import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services.js";
import Projects from "./components/pages/Projects";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
