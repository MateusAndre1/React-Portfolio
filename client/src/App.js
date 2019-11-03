import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Wrapper>
        <Navbar />
        </Wrapper>
        <Footer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
