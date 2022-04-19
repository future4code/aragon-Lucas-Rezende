import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <img className="img-email" src={props.imagem} />

      <p>{props.email}</p>
    </div>
  );
}

export default CardPequeno;
