import React from "react";
import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";
import styled from "styled-components";

const Div = styled.div`
font-family: Arial, Helvetica, sans-serif;
`

function App() {
  return (
    <Div>
      <GlobalState>
        <Router />
      </GlobalState>
    </Div>
  );
}

export default App;
