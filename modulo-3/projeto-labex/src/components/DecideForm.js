import { countrys } from "../routes/constantes/countrys";
import { useForm } from "./hooks/useForm";
import styled from "styled-components";

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
  font-size: 0.7em;
`;

const Select = styled.select`
  color: white;
  display: block;
  float: right;
  width: 200px;
  font-size: 1em;
  background-color: black;
`;

const Div = styled.div`
  margin: 2%;
  width: 500px;
`;

const Label = styled.label`
  font-size: 1em;
  width: 300px;
`;

function DecideForm(props) {
  const [form, changeForm] = useForm({
    trip: "",
    name: "",
    age: "",
    candidateText: "",
    job: "",
    country: "",
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
  };

  const optionTrip = () => {
    return <option value="mercury">Mercúrio</option>;
  };

  return (
    <Main>
      <h2>Inscreva em uma nova viagem!</h2>

      <form onSubmit={confirm}>
        <Div>
          <label htmlFor="viagens">Escolha uma viagem: </label>
          <Select
            id="viagens"
            name="trip"
            value={form.trip}
            onChange={changeForm}
          >
            {optionTrip}
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
            min="18"
            value={form.age}
            onChange={changeForm}
          />
        </Div>

        <Div>
          <Label htmlFor="candidatura">texto de candidatura: </Label>
          <Input
            id="candidatura"
            name="candidateText"
            value={form.candidate}
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
            type="date"
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
