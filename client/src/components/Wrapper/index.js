import React from "react";
import "./style.css";

function Wrapper(props) {
  return <section id={props.id} className="wrapper" style={props.style}>{props.children}</section>;
}

export default Wrapper;
