import React, { Component } from "react";
import styled from "styled-components";

const MessageFooter = styled.p`
  display: block;
  grid-template-columns: 1fr;
  justify-content: space-between;
  padding: 2vh;
`;

const InputMensagem = styled.input`
  width: 50vw;
  font-size: 1.5em;
  margin: 2px;
  background-color: #dcdcdc;
  align-items: center;
`;

const InputUsuario = styled.input`
  width: 5vw;
  font-size: 1.5em;
  background-color: #dcdcdc;
  align-items: center;
`;

const MessageArea = styled.div`
  width: 59%;
  border: 1px solid black;
  height: 80vh;
  font-size: 1.5em;
  padding: 2%;
  text-decoration: none;
  background-color: #f0ffff;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  align-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  font-size: 1.5em;
  margin: 2px;
  align-items: center;
`;

class Mensagem extends Component {
  state = {
    enviar: [
      {
        enviar: false,
        mensagem: "",
        usuario: "",
      },
    ],

    valorInputMensagem: "",
    valorInputUsuario: "",
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      mensagem: this.state.valorInputMensagem,

      usuario: this.state.valorInputUsuario,
    };

    const novoEnviar = [...this.state.enviar, novaMensagem];

    this.setState({ enviar: novoEnviar, valorInputMensagem: "" });
  };

  onchangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };
  onchangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onClickEnviarMensagem = () => {
    this.setState({ enviar: !this.state.enviar });
  };

  render() {
    const listaMensagem = this.state.enviar.map((item) => {
      return (
        <p>
          <b>{item.usuario}</b> {item.mensagem}
        </p>
      );
    });

    return (
      <MessageFooter>
        <MessageArea>{listaMensagem}</MessageArea>

        <InputUsuario
          placeholder={"usuário"}
          value={this.state.valorInputUsuario}
          onChange={this.onchangeInputUsuario}
        />
        <InputMensagem
          placeholder={"mensagem"}
          value={this.state.valorInputMensagem}
          onChange={this.onchangeInputMensagem}
        />

        <Button type="submit" onClick={this.adicionaMensagem}>
          Enviar
        </Button>
      </MessageFooter>
    );
  }
}
export default Mensagem;
