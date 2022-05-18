import axios from "axios";
import { useEffect, useState } from "react";
import { Path, Url } from "../constants/Url";

function Perfis(props) {
  const [perfil, setPerfil] = useState("");

  const getPerfil = () => {
    axios
      .get(`${Url}/${Path}/person`)
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPerfil();
  }, []);

  return (
    <div>
      <h1>
        <h2>Astro♥Match</h2>
        <button onClick={props.vaiParaMatches}>Ir para matches</button>
        <hr></hr>
        <h3>Perfis</h3>
        <img src={perfil.photo} width="200" />
        <p>
          {perfil.name}, {perfil.age} anos
        </p>
        <p>{perfil.bio}</p>
      </h1>
    </div>
  );
}

export default Perfis;
