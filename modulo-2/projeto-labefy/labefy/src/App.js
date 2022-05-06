import react from "react";
import axios from "axios";
import Playlists from "./components/Playlists";

export default class App extends react.Component {
  state = {
    nome: "",
  };

  pegarNomePlayList = (e) => {
    this.setState({ nome: e.target.value });
  };

  criarPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.nome,
    };
    axios
      .post(url, body, {
        headers: { Authorization: "lucas-macedo-aragon" },
      })
      .then((res) => {
        alert("playlist cadastrada com sucesso!");
        this.setState({ nome: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
        this.setState({ nome: "" });
      });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Nome play-list"
          value={this.state.nome}
          onChange={this.pegarNomePlayList}
        />
        <button onClick={this.criarPlaylist}>criar play-list</button>
        <Playlists />
      </div>
    );
  }
}
