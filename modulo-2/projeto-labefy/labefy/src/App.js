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

export default class App extends React.Component {
  state = {
    telaAtual: "playlists",

    playlistClicada: "",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "playlists":
        return <TelaPlaylists irParaTracks={this.irParaTracks} />;
      case "tracks":
        return (
          <TelaTracks
            id={this.state.playlistClicada}
            irParaPlaylists={this.irParaPlaylists}
          />
        );
      default:
        return <div>opção não encontrada!</div>;
    }
  };

  irParaPlaylists = () => {
    this.setState({ telaAtual: "playlists" });
  };

  irParaTracks = (id) => {
    this.setState({ telaAtual: "tracks", playlistClicada: id });
  };

  render() {
    return <Cadastro>{this.escolheTela()}</Cadastro>;
  }
}
