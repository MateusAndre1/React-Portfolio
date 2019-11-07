import React from "react";

function Jumbotron(props, { children }) {
  return (
    <div className="jumbotron" id={props.id}>
      {children}
    </div>
  );
}

export default Jumbotron;
