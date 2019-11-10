import React, { Component } from 'react';
import { Container } from "../../components/Grid"
import AboutCard from "../../components/AboutCard";
import about from "../../about.json"
import "./About.css"

class About extends Component {
    state = {
        about
    };

    render() {

        return (
            <Container>
                {this.state.about.map(aboutMe => (
                    <AboutCard
                        about={aboutMe.about}
                        key={aboutMe.id}
                        img={aboutMe.img}
                    />
                ))}
            </Container>
        )
    }
}

export default About