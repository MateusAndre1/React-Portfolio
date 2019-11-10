import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoBg from "./components/VideoBg"

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
          <div className="App">
            <VideoBg />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
          <Footer />
          </>
        </Router>
      </>

    );
  }
}

export default App;
