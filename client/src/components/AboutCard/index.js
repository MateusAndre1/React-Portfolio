import React from "react";
import { Col, Row } from "../Grid";
import "./AboutCard.css";

export default function AboutCard(props) {

  return (
    <React.Fragment>
      <div className="cardAbout">
        <Row>
          <Col size="md-3">
            <img src={props.img} className="img-fluid" alt="profile" />
          </Col>
          <Col size="md-7">
            <div className="aboutSection">
              <p>{props.about}</p>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
