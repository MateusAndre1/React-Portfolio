import React, { Component } from 'react';
// import { Col, Row, Container } from "../components/Grid";
import ProjectsCard from "../../components/ProjectsCard";
import projects from "../../projects.json";

class Projects extends Component {
    state = {
        projects
    };
    render() {
        return (
            <>
            {this.state.projects.map(project => (
                <ProjectsCard
                    about={project.about}
                    key={project.id}
                    img={project.img}
                    link={project.link}
                    git={project.git}
                />
            ))}
            </>
        )
    }
}

export default Projects