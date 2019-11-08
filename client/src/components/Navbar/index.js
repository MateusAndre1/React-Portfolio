import React, { Component } from 'react';
import "./navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar fixed-top mainNav">
          <a className="navbar-brand logo ml-3 mt-5" href="/">
          <img src="./assets/images/A.png" alt="logo" />
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item navLinksA">
              <a className="nav-link" href="/about"><span className="navLinksA">ABOUT</span></a>
            </li>
            <li className="nav-item navLinksP">
              <a className="nav-link" href="/projects"><span className="navLinksP">PROJECTS</span></a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

