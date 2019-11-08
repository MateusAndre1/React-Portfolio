import React, { Component } from 'react';
import VideoBg from "../../components/VideoBg"
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <VideoBg />
                <div className="row">
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
                <a class="btn btn-black mt-5 btn1" href="#portfolio-section">
                    Explore My Work
                </a>
                </div>
            </React.Fragment>
        )
    }
}

export default Home