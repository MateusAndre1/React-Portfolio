import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./navbar.css"

export default class Navbar extends Component {
  render() {
    const vert_align = {
      display: 'flex',
      flexDirection: 'column'
  }
    return (
      <>
        <div style={vert_align} fixed="top">
          <div className="navbar mainNav">
            <a className="navbar-brand logo ml-3 mt-5" href="/">
              <img src="./assets/images/A.png" alt="logo" />
            </a>
            <ul className="nav justify-content-end">
              <li className="nav-item navLinksA">
                <Link smooth style={{ textDecoration: "none" }}
                  to="/#about">
                  <span className="navLinksA">ABOUT</span>
                </Link>
              </li>
              <li className="nav-item navLinksP">
                <Link smooth style={{ textDecoration: "none" }}
                  to="/#projects">
                  <span className="navLinksP">PROJECTS</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

