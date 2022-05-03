import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/etapa1";
import Etapa2 from "./components/etapa2";
import Etapa3 from "./components/etapa3";
import Final from "./components/final";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const Button = styled.button`
  margin: 2%;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <p>Formulário não encontrado</p>;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <Div>
        {this.renderizaEtapa()}
        {this.state.etapa < 4 ? (
          <Button onClick={this.irParaProximaEtapa}>Próxima etapa</Button>
        ) : (
          ""
        )}
      </Div>
    );
  }
}

export default App;
