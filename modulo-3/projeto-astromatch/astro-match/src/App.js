import Perfis from "./components/Perfis";
import Matches from "./components/Matches";
import { useState } from "react";

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
  return <div>{escolheTela()}</div>;
}

export default App;
