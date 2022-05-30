import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const Button = styled.button`
  background-color: purple;
  color: white;
  margin: 10%;
  padding: 5%;
  &:hover {
    cursor: pointer;
    color: lime;
  }
`;

const ButtonRep = styled.button`
  background-color: purple;
  color: white;
  margin: 10%;
  padding: 5%;
  &:hover {
    cursor: pointer;
    color: tomato;
  }
`;

function DetailPage() {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { idTrip } = useParams();

  useEffect(() => {
    GetTripDetail(idTrip);
  }, []);

  const GetTripDetail = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-rezende-aragon/trip/${id}`;

    axios
      .get(url, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setDetails(res.data.trip);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const decide = (id, idCand, Aproved) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-rezende-aragon/trips/${id}/candidates/${idCand}/decide`;
    const body = {
      approve: { Aproved },
    };

    axios
      .put(url, body, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        GetTripDetail(idTrip);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const candidatesList =
    details &&
    details.candidates?.map((candidate) => {
      return (
        <div>
          <p>Nome: {candidate.name} </p>
          <p>Profissão: {candidate.profession} </p>
          <p>Idade: {candidate.age} </p>
          <p>País: {candidate.country}</p>
          <p>Texto de Candidatura: {candidate.applicationText} </p>
          <Button
            onClick={() => {
              if (window.confirm("Deseja aprovar candidatura?") === true)
                decide(idTrip, candidate.id, true);
            }}
          >
            Aprovar
          </Button>
          <ButtonRep
            onClick={() => {
              if (window.confirm("Deseja reprovar candidatura?") === true)
                decide(idTrip, candidate.id, false);
            }}
          >
            Reprovar
          </ButtonRep>
        </div>
      );
    });

  return (
    <Main>
      <Header activePage={"detail-page"} token={"token"} />
      <h2>Viagem: {details.name}</h2>
      {details.description}
      <h3>Lista de candidatos:</h3>
      {candidatesList}
    </Main>
  );
}

export default DetailPage;
