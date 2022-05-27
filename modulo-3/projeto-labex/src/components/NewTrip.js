import { useForm } from "./hooks/useForm";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { planets } from "../routes/constantes/planets";

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

function NewTrip() {
  const [form, changeForm] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationTime: "",
  });

  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationTime: form.durationTime,
  };

  const confirm = (e) => {
    e.preventDefault();
    createTrip();
  };

  const createTrip = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-rezende-aragon/trips",
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        changeForm(res.data.trips);
      })
      .catch((err) => alert("erro ao enviar nova viagem!"));
  };

  return (
    <Main>
      <h2>Crie uma viagem!</h2>

      <form onSubmit={confirm}>
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
          <Label htmlFor="planetas">Escolha um planeta: </Label>
          <Select
            id="planetas"
            name="planet"
            value={form.planet}
            onChange={changeForm}
          >
            <option value="">Escolha 🌍</option>
            {planets.map((planet) => {
              return <option value={planet}>{planet}</option>;
            })}
          </Select>
        </Div>

        <Div>
          <Label htmlFor="lançamento">Data de lançamento: </Label>
          <Input
            id="lançamento"
            name="date"
            value={form.date}
            onChange={changeForm}
            type="date"
          />
        </Div>

        <Div>
          <Label htmlFor="descrição">Descrição: </Label>
          <Input
            id="descrição"
            name="description"
            value={form.description}
            onChange={changeForm}
          />
        </Div>

        <Div>
          <Label htmlFor="duração">Duração em dias: </Label>
          <Input
            id="duração"
            name="durationTime"
            value={form.durationTime}
            onChange={changeForm}
          />
        </Div>

        <Button>Cadastrar</Button>
      </form>
    </Main>
  );
}

export default NewTrip;
