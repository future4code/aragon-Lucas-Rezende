import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavigateToAdmin, NavigateToDetail } from "../routes/coordinator";

const Button = styled.button`
  background-color: purple;
  color: white;
  margin: 1%;
  padding: 2%;
  &:hover {
    cursor: pointer;
    color: lime;
  }
`;

function TripList(props) {
  const [trips, setTrips] = useState([]);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    getTrip();
  }, [trips]);

  const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-rezende-aragon/trips/${id}`;
    if (window.confirm("deseja deletar?") === true) {
      axios
        .delete(url, {
          headers: {
            auth: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          getTrip();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const getTrip = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-rezende-aragon/trips";
    axios
      .get(url, {
        headers: {
          Authorization: "lucas-aragon",
        },
      })
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const listaTripe = trips.map((trip) => {
    const buttons = (
      <section>
        <Button onClick={() => NavigateToDetail(navigate, trip.id)}>
          detalhes
        </Button>
        <Button onClick={() => deleteTrip(trip.id)}>deletar</Button>
      </section>
    );

    const renderButton = () => {
      if (token !== null) return buttons;
    };

    return (
      <div>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description} </p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays} dias</p>
        <p>Data: {trip.date}</p>
        {renderButton()}
        <hr></hr>
      </div>
    );
  });

  return (
    <main>
      <h3>Lista de viagens</h3>
      <p>{listaTripe}</p>
    </main>
  );
}
export default TripList;
