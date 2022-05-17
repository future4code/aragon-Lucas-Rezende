import Post from "./components/Post";
import styled from "styled-components";
import "./App.css";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 0;
  background-color: #add8e6;
`;

const H1 = styled.h1`
  text-shadow: 2px 2px steelblue;
`;

function App(props) {
  return (
    <Main>
      <H1>Post</H1>
      <Post
        nomeUsuario={"Lucas Macedo"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
    </Main>
  );
}

export default App;
