import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Button = styled.button`
  margin: 10%;
  &:hover {
    background-color: #cc6600;
    color: white;
  }
`;

const ButtonDeletar = styled.button`
  &:hover {
    background-color: #cc6600;
    color: white;
  }
`;

const Lista = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-content: space-between;
  background-color: beige;
  width: 20em;
  margin: 1%;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  border-radius: 5px;
`;

export default class TelaListaUsuario extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
        headers: {
          Authorization: "lucas-macedo-aragon",
        },
      })
      .then((res) => {
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        alert("lista não encontrada!");
      });
  };

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "lucas-macedo-aragon",
        },
      })
      .then((res) => {
        alert("usuário(a) deletado(a) com sucesso!");
        this.pegarUsuarios();
      })
      .catch((err) => {
        alert("ocorreu um erro tente novamente!");
      });
  };

  render() {
    const listaUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Lista>
          {usuario.name}
          {usuario.email}
          <ButtonDeletar
            onClick={() => {
              this.deletarUsuario(usuario.id);
            }}
          >
            deletar{" "}
          </ButtonDeletar>
        </Lista>
      );
    });
    return (
      <MainLista>
        <Button onClick={this.props.irParaCadastro}>Cadastro</Button>
        {listaUsuarios}
      </MainLista>
    );
  }
}
