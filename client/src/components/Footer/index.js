import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer text-center mx-auto text-white">
            <i className="far fa-copyright"></i> 2019 Andre Roque
            <a id="facebook2" href="https://github.com/MateusAndre1">
              <span className="ml-3" id="facebook2">
                <i className="fab fa-github-square"></i>
              </span>
            </a>
            <a id="linkedin2" href="https://www.linkedin.com/in/andremroque/">
              <span id="linkedin2">
                <i className="fab fa-linkedin ml-3"></i>
              </span>
            </a>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;