import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer text-center mx-auto text-white">
          <div className="mx-auto pt-3">
            <i className="far fa-copyright"></i> 2019 Andre Roque
            <a id="footerLinks" href="https://github.com/MateusAndre1">
              <span id="footerLinks">
                <i className="fab fa-github-square"></i>
              </span>
            </a>
            <a id="footerLinks" href="https://www.linkedin.com/in/andremroque/">
              <span id="footerLinks">
                <i className="fab fa-linkedin"></i>
              </span>
            </a>
            <a id="footerLinks" href="mailto:aroque@andremroque.com">
              <span id="footerLinks">
              <i class="fas fa-envelope-square"></i>
              </span>
            </a>
            <p>Built with: ReactJS</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;