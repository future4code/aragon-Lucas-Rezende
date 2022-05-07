import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const ButtonInfo = styled.button`
  margin: 1%;
  &:hover {
    background-color: lime;
    color: white;
  }
`;

const ButtonDeletar = styled.button`
  margin: 1%;
  &:hover {
    background-color: lime;
    color: white;
  }
`;

const Lista = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  align-content: space-between;
  background-color: #e0e0e0;
  width: 20em;
  margin: 1%;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  border-radius: 5px;
  &:hover {
    background-color: #66ff66;
  }
`;

export default class TelaPlaylists extends React.Component {
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
        <Lista>
          {playlist.name}
          <ButtonInfo playId={playlist.id} onClick={this.props.irParaTracks}>
            info
          </ButtonInfo>
          <ButtonDeletar
            onClick={() => {
              this.deletarPlaylist(playlist.id);
            }}
          >
            deletar{" "}
          </ButtonDeletar>
        </Lista>
      );
    });
    return <MainLista>{novaPlayList}</MainLista>;
  }
}
