import { countrys } from "../routes/constantes/countrys";
import { useForm } from "./hooks/useForm";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

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

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  color: white;
  margin: 2%;
  width: 600px;
  font-size: 1.1em;
`;

const Input = styled.input`
  color: white;
  display: block;
  float: right;
  width: 200px;
  font-size: 1em;
`;

const Select = styled.select`
  color: white;
  display: block;
  float: right;
  width: 200px;
  font-size: 1em;
  background-color: black;
`;

const Label = styled.label`
  font-size: 1em;
  width: 300px;
`;

const Div = styled.div`
  margin: 2%;
  width: 500px;
`;

function DecideForm() {
  const [form, changeForm] = useForm({
    name: "",
    age: null,
    applicationText: "",
    job: "",
    country: "",
  });

  const [trips, setTrips] = useState([]);

  const [tripId, setTripId] = useState("");

  useEffect(() => {
    getTrip();
  }, []);

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

  const aplicationTrip = (id) => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.candidateText,
      profession: form.job,
      country: form.country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-rezende-aragon/trips/${id}/apply`,
        body
      )
      .then((res) => {
        alert("Candidatura realizada com sucesso!");
      })
      .catch((err) => console.log(err.message));
  };

  const onchangeTripId = (e) => {
    setTripId(e.target.value);
  };

  const optionTrip = () =>
    trips.map((trip) => {
      return <option value={trip.id}>{trip.name}</option>;
    });

  const SendCandidate = (event) => {
    event.preventDefault();
    aplicationTrip(tripId);
  };

  return (
    <Main>
      <form onSubmit={SendCandidate}>
        <Div>
          <label htmlFor="viagens">Escolha uma viagem: </label>
          <Select
            id="viagens"
            name="trip"
            defaultValue=""
            onChange={onchangeTripId}
          >
            {optionTrip()}
          </Select>
        </Div>

        <Div>
          <Label htmlFor="nome">Nome: </Label>
          <Input
            id="nome"
            name="name"
            value={form.name}
            onChange={changeForm}
          />
        </Div>

        <Div>
          <Label htmlFor="idade">Idade: </Label>
          <Input
            id="idade"
            name="age"
            type="number"
            value={form.age}
            onChange={changeForm}
          />
        </Div>

        <Div>
          <Label htmlFor="candidatura">texto de candidatura: </Label>
          <Input
            id="candidatura"
            name="candidateText"
            value={form.candidateText}
            onChange={changeForm}
          />
        </Div>

        <Div>
          <Label htmlFor="profissão">Profissão: </Label>
          <Input
            id="profissão"
            name="job"
            value={form.job}
            onChange={changeForm}
          />
        </Div>

        <Div>
          <Label htmlFor="países">País de origem: </Label>
          <Select
            id="países"
            name="country"
            value={form.country}
            onChange={changeForm}
          >
            <option value="">Escolha um país...</option>
            {countrys.map((country) => {
              return <option value={country}>{country}</option>;
            })}
          </Select>
        </Div>

        <Button>enviar candidatura</Button>
      </form>
    </Main>
  );
}

export default DecideForm;
