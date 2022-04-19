import React from "react";
import "./ImagemButton.css";

function ImagemButton(props) {
  return (
    <div className="image-button-container">
      <a src={props.link} />
      <img src={props.imagem} />
      <p>{props.texto}</p>
    </div>
  );
}

export default ImagemButton;
