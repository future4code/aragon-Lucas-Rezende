import axios from "axios";
import { useEffect, useState } from "react";
import { Path, Url } from "../constants/Url";

function Perfis(props) {
  const [perfil, setPerfil] = useState({});

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

  const escolherPerfil = (perfilId, opcao) => {
    const body = {
      id: perfilId,
      choice: opcao,
    };

    axios
      .post(`${Url}/${Path}/choose-person`, body)
      .then((res) => {
        getPerfil();
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
      <h1>Astro♥Match</h1>
      <button onClick={props.vaiParaMatches}>Ir para matches</button>

      <hr></hr>
      <h3>Perfil</h3>
      <img src={perfil.photo} width="200" />
      <p>
        {perfil.name}, {perfil.age} anos
      </p>
      <p>{perfil.bio}</p>
      <button
        onClick={() => {
          escolherPerfil(perfil.id, true);
        }}
      >
        like
      </button>
      <button
        onClick={() => {
          escolherPerfil(perfil.id, false);
        }}
      >
        deslike
      </button>
    </div>
  );
}

export default Perfis;
