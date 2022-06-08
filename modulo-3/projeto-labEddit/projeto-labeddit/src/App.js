import { createContext } from "react";
import styled from "styled-components";
import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";

const Main = styled.main`
  font-family: Arial, Helvetica, sans-serif;
`;

export const StatusContext = createContext();

function App() {
  return (
    <Main>
      <GlobalState>
        <Router />
      </GlobalState>
    </Main>
  );
}

export default App;
