import React from "react";
import { Col, Row } from "../Grid";
import "./SkillsCard.css";

export default function SkillsCard(props) {

  return (
    <React.Fragment>
        <Row>
        <div className="cardAbout">
          <Col size="md-3">
            <img src={props.img} className="img-fluid" alt="skills" />
          </Col>
          </div>
        </Row>
    </React.Fragment>
  );
}
