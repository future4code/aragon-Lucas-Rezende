import React from "react";
import axios from "axios";
import TelaPlaylists from "./Playlists/playlists";
import TelaTracks from "./Playlists/tracks";
import styled from "styled-components";
import "./App.css";

const Cadastro = styled.main`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: grey;
`;

const Button = styled.button`
  margin: 1%;
  &:hover {
    background-color: lime;
    color: white;
  }
`;

export default class App extends React.Component {
  state = {
    telaAtual: "playlists",
    nomePlaylist: "",
  };

  pegarPlayList = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, {
        headers: {
          Authorization: "lucas-macedo-aragon",
        },
      })
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert("lista não encontrada!");
      });
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "playlists":
        return <TelaPlaylists irParaTracks={this.irParaTracks} />;
      case "tracks":
        return <TelaTracks irParaPlaylists={this.irParaPlaylists} />;
      default:
        return <div>opção não encontrada!</div>;
    }
  };

  irParaPlaylists = () => {
    this.setState({ telaAtual: "playlists" });
  };

  irParaTracks = () => {
    this.setState({ telaAtual: "tracks" });
  };

  cadastrarPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.nomePlaylist,
    };

    axios
      .post(url, body, {
        headers: { Authorization: "lucas-macedo-aragon" },
      })
      .then((res) => {
        alert("usuário cadastrado(a) com sucesso!");
        this.setState({ nomePlaylist: "" });
        this.pegarPlayListt();
      })
      .catch((error) => {
        alert(error.response.data.message);
        this.setState({ nomePlaylist: "" });
      });
  };

  playlistCadastrada = (e) => {
    this.setState({ nomePlaylist: e.target.value });
  };

  render() {
    return (
      <Cadastro>
        <h1>PLAYLISTS</h1>
        <input
          placeholder="nova playlist"
          value={this.state.nomePlaylist}
          onChange={this.playlistCadastrada}
        />
        <Button onClick={this.cadastrarPlaylist}>cadastrar</Button>
        {this.escolheTela()}
      </Cadastro>
    );
  }
}
