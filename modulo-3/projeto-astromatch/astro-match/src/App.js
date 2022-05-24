import Perfis from "./components/Perfis";
import Matches from "./components/Matches";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Div = styled.div`
  background-color: salmon;
  padding: 0;
  margin: 0;
`;

function App(props) {
  const [paginaAtual, setPaginaAtual] = useState("perfis");

  const escolheTela = () => {
    switch (paginaAtual) {
      case "perfis":
        return <Perfis vaiParaMatches={vaiParaMatches} />;
      case "matches":
        return <Matches vaiParaPerfis={vaiParaPerfis} />;
      default:
        return <div>Página não encontrada!</div>;
    }
  };

  const vaiParaPerfis = () => {
    setPaginaAtual("perfis");
  };
  const vaiParaMatches = () => {
    setPaginaAtual("matches");
  };
  return <Div>{escolheTela()}</Div>;
}

export default App;
