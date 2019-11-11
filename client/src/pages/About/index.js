import React, { Component } from 'react';
import { Row, Container } from "../../components/Grid"
import AboutCard from "../../components/AboutCard";
import SkillsCard from "../../components/SkillsCard";
import about from "../../about.json";
import skills from "../../skills.json";
import "./About.css";

class About extends Component {
    state = {
        about,
        skills
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
                <div style={{ marginBottom: "100px" }}>
                    <div className="cardAbout">
                        <Row>
                            {this.state.skills.map(aboutMe => (
                                <SkillsCard
                                    key={aboutMe.id}
                                    img={aboutMe.img}
                                />
                            ))}
                        </Row>
                    </div>
                </div>
            </Container >
        )
    }
}

export default About