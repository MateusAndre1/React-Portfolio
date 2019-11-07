import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container text-center mx-auto">
            <i className="far fa-copyright"></i> 2019 Andre Roque
            <a href="https://github.com/MateusAndre1">
              <span className="ml-3" id="facebook2">
                <i className="fab fa-github-square"></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/andremroque/">
              <span id="linkedin2">
                <i className="fab fa-linkedin ml-3"></i>
              </span>
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;