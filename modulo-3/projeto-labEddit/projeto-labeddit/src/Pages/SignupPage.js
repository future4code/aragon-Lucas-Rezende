import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { Url } from "../constants/urls";
import { goBack, goToPost } from "../routes/coordinator";

const Div = styled.div`
  background-color: Gainsboro;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  font-size: 1em;
  font-weight: 600;
  height: 7vh;
  border-radius: 10px;
  margin: 2%;

  &:hover {
    background-color: orange;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
`;

export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    });
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post(`${Url}/users/signup`, form)
      .then((res) => {
        alert("Usuário cadastrado com sucesso!");
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("email", form.email);
        goToPost(navigate);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Div>
      <Header />
      <h2>Cadastrete-se</h2>

      <form onSubmit={signup}>
        <label htmlFor={"name"}> Nome: </label>
        <input
          id={"name"}
          name={"username"}
          value={form.name}
          onChange={onChange}
          required
        />
        <br />
        <label htmlFor={"email"}> E-mail: </label>
        <input
          id={"email"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <br />
        <label htmlFor={"password"}> Senha: </label>
        <input
          id={"password"}
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
        />
        <br />
        <br />
        <Button type={"submit"}>Cadastrar</Button>
      </form>
      <Button onClick={() => goBack(navigate)}>voltar</Button>
    </Div>
  );
}
