import { useEffect, useState } from "react";
import axios from "axios";
import { Path, Url } from "../constants/Url";

function Matches(props) {
  const [matches, setMatches] = useState([]);

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

  const getMatches = () => {
    axios
      .get(`${Url}/${Path}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const resetarPerfis = () => {
    axios
      .put(`${Url}/${Path}/clear`)
      .then(() => {
        alert("ok");
        getPerfil();
        getMatches();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const listaDeMatches = matches.map((matche) => {
    return (
      <div>
        <img src={matche.photo} width="40px" />
        <p>{matche.name}</p>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <h1>Astro♥Match</h1>
      <button onClick={props.vaiParaPerfis}>Ir para perfis</button>
      <button onClick={() => resetarPerfis()}> Resetar</button>
      <hr></hr>
      {listaDeMatches}
    </div>
  );
}

export default Matches;
