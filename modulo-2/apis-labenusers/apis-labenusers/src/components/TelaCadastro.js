import { hover } from "@testing-library/user-event/dist/hover";
import axios from "axios";
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  align-items: center;
  align-content: space-between;
  background-color: orange;
  margin: 0;
`;

const Button = styled.button`
  width: 70%;
  align-items: center;
  align-content: center;
  text-align: center;
  margin: 2%;

  &:hover {
    background-color: #cc6600;
    color: white;
  }
`;

const Titulo = styled.h1`
  color: white;
`;

const Input = styled.input`
  margin: 5%;
`;

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  pegarNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  pegaremail = (e) => {
    this.setState({ email: e.target.value });
  };

  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    axios
      .post(url, body, {
        headers: { Authorization: "lucas-macedo-aragon" },
      })
      .then((res) => {
        alert("usuário cadastrado(a) com sucesso!");
        this.setState({ nome: "", email: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
        this.setState({ nome: "", email: "" });
      });
  };

  render() {
    return (
      <Main>
        {/* <Titulo>Cadastro de novos usuários</Titulo> */}
        <Input
          placeholder="nome"
          value={this.state.nome}
          onChange={this.pegarNome}
        />
        <Input
          placeholder="e-mail"
          value={this.state.email}
          onChange={this.pegaremail}
        />
        <Button onClick={this.fazerCadastro}>criar cadastro</Button>
        <Button onClick={this.props.irParaLista}>lista</Button>
      </Main>
    );
  }
}
