import react from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  margin: 1%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-content: space-between;
  width: 300px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

export default class Playlists extends react.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.pegarPlayList();
  }

  componentDidUpdate() {
    this.pegarPlayList();
  }

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
        console.log(res.data);
      })
      .catch((err) => {
        alert("lista não encontrada!");
      });
  };

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "lucas-macedo-aragon",
        },
      })
      .then((res) => {
        alert("playlist deletada com sucesso!");
        this.pegarPlayList();
      })
      .catch((err) => {
        alert("ocorreu um erro tente novamente!");
      });
  };

  render() {
    const novaPlayList = this.state.playlists.map((playlist) => {
      return (
        <Div>
          {playlist.name}
          <button
            onClick={() => {
              this.deletarPlaylist(playlist.id);
            }}
          >
            deletar{" "}
          </button>
        </Div>
      );
    });
    return <div>{novaPlayList}</div>;
  }
}
