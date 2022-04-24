import React from "react";
import styled from "styled-components";
import Mensagem from "./components/Mensagem";

const Main = styled.div``;

const MessageHeader = styled.p`
  display: block;
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 40vh;
  border: 1px solid black;
`;

// document.addEventListener("keypress", function (event) {
//   if (event.key === "enter") {
//     console.log("apertou");
//   }
// });

class App extends React.Component {
  render() {
    return (
      <Main>
        <Mensagem />
      </Main>
    );
  }
}

export default App;
