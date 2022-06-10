import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { goToPost, goToSignup } from "../routes/coordinator";

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

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setForm({
      ...form,
      ["email"]: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    setForm({
      ...form,
      ["password"]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://labeddit.herokuapp.com/users/login", form)
      .then((res) => {
        alert("Bem vindo ao labEddit");
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("email", form.email);
        goToPost(navigate);
      })
      .catch((err) => {
        alert("Usuário ou senha errado!");
      });
  };

  return (
    <Div>
      <Header />
      <h2>Login</h2>
      <form onSubmit={login}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={onChangeEmail}
          required
        />
        <br />
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          name="password"
          value={form.password}
          onChange={onChangePassword}
          type="password"
          required
        />
        <br />
        <Button>Entrar</Button>
      </form>
      <hr />
      <h2>Não tem cadastro? cadastre-se agora:</h2>
      <Button onClick={() => goToSignup(navigate)}>cadastrar</Button>
    </Div>
  );
}
