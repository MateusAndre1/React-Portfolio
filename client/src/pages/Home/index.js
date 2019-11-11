import React, { Component } from 'react';
import Wrapper from "../../components/Wrapper";
import About from "../About";
import Projects from "../Projects";
import { HashLink as Link } from 'react-router-hash-link';
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Wrapper style={{minHeight: "20vh"}} />
                <div className="row ml-2">
                    <div className="col p-0">
                        <div className="leftSide text-right">
                            <p className="leftName">ANDRE</p><p>Where reaching new</p>
                        </div>
                    </div>
                    <div className="col p-0">
                        <div className="rightSide">
                            <p className="rightName">ROQUE</p><p className="rightP">heights is possible</p>
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                <Link smooth style={{ textDecoration: "none" }}
                  to="/#projects">
                  <span className="btn btn-black mt-5 btn1">Explore My Work</span>
                </Link>
                </div>
                <Wrapper style={{minHeight: "50vh"}} />
                <Wrapper style={{minHeight: "100vh"}} id={"about"}>
                    <About />
                </Wrapper>
                <Wrapper style={{minHeight: "100vh", marginBottom: "100px"}} id={"projects"}>
                    <Projects />
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default Home