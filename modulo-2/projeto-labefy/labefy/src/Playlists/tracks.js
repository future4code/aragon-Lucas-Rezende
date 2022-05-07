import React from "react";
import axios from "axios";
import styled from "styled-components";

const ButtonVoltar = styled.button`
  margin: 0 0 20% 0;
  &:hover {
    background-color: lime;
    color: white;
  }
`;

export default class TelaTracks extends React.Component {
  state = {
    tracks: [],
  };

  pegarPlayListTrack = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/${id}/tracks;`;
    axios
      .get(url, {
        headers: {
          Authorization: "lucas-macedo-aragon",
        },
      })
      .then((res) => {
        this.setState({ tracks: res.data.result.name });
      })
      .catch((err) => {
        alert("ocorreu um erro tente novamente!");
      });
  };

  render() {
    return (
      <div>
        <ButtonVoltar onClick={this.props.irParaPlaylists}>voltar</ButtonVoltar>
        <p>
          {() => {
            this.pegarPlayListTrack(this.props.playId);
          }}
        </p>
      </div>
    );
  }
}
