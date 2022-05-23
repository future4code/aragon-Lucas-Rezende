import axios from "axios";
import { useEffect, useState } from "react";

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrip();
  }, []);

  const getTrip = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips";
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
    return (
      <div>
        <p>Name: {trip.name}</p>
        <p>descrição: {trip.description} </p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
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
