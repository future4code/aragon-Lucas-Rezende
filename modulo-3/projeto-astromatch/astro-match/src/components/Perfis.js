import axios from "axios";
import { useEffect, useState } from "react";
import { Path, Url } from "../constants/Url";
import styled from "styled-components";

const Button = styled.button`
  margin: 1%;
  width: 5%;
  background-color: tomato;
  border-radius: 10px;
  &:hover {
    background-color: crimson;
    color: white;
  }
`;

const ButtonMatches = styled.button`
  margin: 1%;
  width: 7%;
  color: white;
  background-color: tomato;
  border-radius: 10px;
  &:hover {
    background-color: crimson;
    color: white;
  }
  margin: 2% 0 0 5%;
  font-size: 1em;
`;

const ButtonReset = styled.button`
  margin: 1%;
  width: 7%;
  color: white;
  background-color: tomato;
  border-radius: 10px;
  margin: 2% 0 0 5%;
  font-size: 1em;
  &:hover {
    background-color: crimson;
    color: white;
  }
`;

const Div = styled.div`
  background-color: salmon;
`;

const Perfil = styled.div`
  display: grid;
  grid-column: 1fr 1fr 1fr;
  margin: 5%;
`;

const H3 = styled.h3`
  display: grid;
  grid-column: 1fr 1fr 1fr;
  margin: 2% 0 0 5%;
  text-shadow: 2px 2px red;
  font-size: 2em;
`;

const H1 = styled.h1`
  margin: 2% 0 0 5%;
  text-shadow: 2px 2px red;
  font-size: 3em;
`;

const Texto = styled.div`
  width: 20%;
`;

const Img = styled.img`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; ;
`;

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
        if (window.confirm("Dar um matche?") === true) {
          getPerfil();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const resetarPerfis = () => {
    axios
      .put(`${Url}/${Path}/clear`)
      .then(() => {
        getPerfil();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getPerfil();
  }, []);

  const perfilTela = perfil ? (
    <Perfil>
      <div>
        <Img src={perfil.photo} width="200" />
      </div>
      <Texto>
        <p>
          <b>
            {perfil.name}, {perfil.age} anos
          </b>
        </p>
        <p>{perfil.bio}</p>
      </Texto>
      <div>
        <Button
          onClick={() => {
            escolherPerfil(perfil.id, true);
          }}
        >
          💓
        </Button>
        <Button
          onClick={() => {
            if (window.confirm("Fica para a próxima!?") === true) {
              getPerfil();
            }
          }}
        >
          👎
        </Button>
      </div>
    </Perfil>
  ) : (
    <ButtonReset
      onClick={() => {
        window.confirm("Sem mais opções de perfis, gostaria de reiniciar?");
        resetarPerfis();
      }}
    >
      Reiniciar
    </ButtonReset>
  );
  return (
    <Div>
      <H1>🚀Astro💕Match</H1>
      <ButtonMatches onClick={props.vaiParaMatches}>Matches</ButtonMatches>
      <hr></hr>
      <H3>Perfil</H3>
      {perfilTela}
    </Div>
  );
}

export default Perfis;
