import { useEffect, useState } from "react";
import axios from "axios";
import { Path, Url } from "../constants/Url";
import styled from "styled-components";

const ButtonPerfis = styled.button`
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

const Div = styled.div`
  background-color: salmon;
`;

const H1 = styled.h1`
  margin: 2% 0 0 5%;
  text-shadow: 2px 2px red;
  font-size: 3em;
`;

const Section = styled.section`
  margin: 2% 0 0 5%;
`;

const Img = styled.img`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; ;
`;

function Matches(props) {
  const [matches, setMatches] = useState([]);

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

  const listaDeMatches = matches.map((matche) => {
    return (
      <div>
        <Section>
          <Img src={matche.photo} width="40px" />
          <p>
            <b>{matche.name}</b>
          </p>
        </Section>
        <hr />
      </div>
    );
  });

  return (
    <Div>
      <H1>🚀Astro💕Match</H1>
      <ButtonPerfis onClick={props.vaiParaPerfis}>Perfis</ButtonPerfis>
      <hr></hr>
      {listaDeMatches}
    </Div>
  );
}

export default Matches;
