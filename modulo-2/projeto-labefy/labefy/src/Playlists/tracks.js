import React from "react";
import axios from "axios";
import styled from "styled-components";

const ButtonVoltar = styled.button`
  margin: 0 0 20% 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  &:hover {
    background-color: lime;
    color: white;
  }
`;

const Tracks = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export default class TelaTracks extends React.Component {
  state = {
    tracks: [],
  };

  componentDidMount() {
    this.pegarPlayListTrack(this.props.id);
  }

  pegarPlayListTrack = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/${id}/tracks`;
    axios
      .get(url, {
        headers: {
          Authorization: "lucas-macedo-aragon",
        },
      })
      .then((res) => {
        this.setState({ tracks: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <Tracks>
        <h1>TRACKS</h1>
        <ButtonVoltar onClick={this.props.irParaPlaylists}>voltar</ButtonVoltar>
        {this.state.tracks}
        <p>{this.props.id}</p>
      </Tracks>
    );
  }
}
