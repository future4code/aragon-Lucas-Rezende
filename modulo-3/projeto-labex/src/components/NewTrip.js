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
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  color: white;
  margin: 10%;
  width: 600px;
`;

function NewTrip() {
  //   const [form, changeForm] = useForm({
  //     name: "",
  //     planet: "",
  //     date: "",
  //     description: "",
  //     durationTime: "",
  //   });

  // const confirm = (e) => {
  //   e.preventDefault();

  //   const body = {
  //     name: form.name,
  //     planet: form.planet,
  //     date: form.date,
  //     description: form.description,
  //     durationTime: form.durationTime,
  //   }

  //   console.log(body);
  //   ;
  // }
  return (
    <Main>
      <h2>Crie uma viagem!</h2>

      {/* onSubmit={confirm} */}
      <form>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            id="nome"
            name="name"
            // value={form.name}
            // onChange={changeForm}
          />
        </div>

        <div>
          <label htmlFor="planetas">Escolha um planeta: </label>
          <select
            id="planetas"
            name="planet"
            // value={form.planet}
            // onChange={changeForm}
          >
            <option value="">Escolha🌍</option>
            <option value="mercury">Mercúrio</option>
            <option value="venus">Vênus</option>/option>
            <option value="earth">Terra</option>
            <option value="mars">Marte</option>
            <option value="jupiter">Júpiter</option>
            <option value="saturn">Saturno</option>
            <option value="uranus">Urano</option>
            <option value="neptune">Netuno</option>
            <option value="pluto">Plutão</option>
          </select>
        </div>

        <div>
          <label htmlFor="lançamento">Data de lançamento: </label>
          <input
            id="lançamento"
            name="date"
            // value={form.date}
            // onChange={changeForm}
            type="date"
          />
        </div>

        <div>
          <label htmlFor="descrição">Descrição: </label>
          <input
            id="descrição"
            name="description"
            // value={form.description}
            // onChange={changeForm}
          />
        </div>

        <div>
          <label htmlFor="duração">Duração em dias: </label>
          <input
            id="duração"
            name="durationTime"
            // value={form.durationTime}
            // onChange={changeForm}
          />
        </div>

        <Button>Cadastrar</Button>
      </form>
    </Main>
  );
}

export default NewTrip;
