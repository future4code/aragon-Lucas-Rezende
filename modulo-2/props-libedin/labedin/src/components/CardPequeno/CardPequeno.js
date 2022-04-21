import styled from "styled-components";
import React from "react";
import "./CardPequeno.css";

const Div = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 20px;
  width: 520px;
  justify-content: flex-start;
  margin: 2%;
`;

function CardPequeno(props) {
  return (
    <Div className="smallcard-container">
      <img width="20" className="img-email" src={props.imagem} />

      <p>{props.email}</p>
    </Div>
  );
}

export default CardPequeno;
