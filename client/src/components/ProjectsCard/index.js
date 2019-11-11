import React from "react";
import { Col, Row } from "../Grid";
import "./ProjectsCard.css";

export default function ProjectsCard(props) {

  return (
    <React.Fragment>
      <div className="cardAbout projects">
        <Row>
          <Col size="md-3">
            <img src={props.img} className="img-fluid" alt="project" />
          </Col>
          <Col size="md-7">
            <div className="aboutSection" style={{minHeight: "170px"}}>
              <p className="mt-4">{props.about}</p>
            </div>
          </Col>
          <Col size="md-2">
              <a href={props.link}><i className="fas fa-link links"></i></a> 
              <a href={props.git}><i className="fab fa-github links"></i></a> 
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
