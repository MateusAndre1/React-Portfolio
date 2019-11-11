import React from "react";
import { Col } from "../Grid";
import "./SkillsCard.css";

export default function SkillsCard(props) {

  return (
    <React.Fragment>
          <Col size="4">
          <img src={props.img} className="img-fluid" alt="skills" />
          </Col>
    </React.Fragment>
  );
}
