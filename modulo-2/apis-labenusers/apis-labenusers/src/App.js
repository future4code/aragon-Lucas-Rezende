import React from "react";
import axios from "axios";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuario from "./components/telaListaUsuario";
import styled from "styled-components";
import "./App.css";

const MainPrincipal = styled.section`
  background-color: orange;
  margin: 0;
  padding: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Imagem = styled.img`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Titulo = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  align-content: center;
  color: white;
  font-size: 3em;
`;

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />;
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />;
      default:
        return <div>opção não encontrada!</div>;
    }
  };

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irParaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return (
      <MainPrincipal>
        <Titulo>Cadastro novos alunos</Titulo>
        {this.escolheTela()}
        <Imagem src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5e8f2e04f01a475d079dc987_Labenu_Branco.png" />
      </MainPrincipal>
    );
  }
}
