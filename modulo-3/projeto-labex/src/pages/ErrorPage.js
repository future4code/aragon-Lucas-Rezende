import { useNavigate } from "react-router-dom";
import { NavigateToHome } from "../routes/coordinator";
import styled from "styled-components";

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const Button = styled.button`
  background-color: purple;
  color: white;
  margin: 1%;
  padding: 2%;
  &:hover {
    cursor: pointer;
    color: lime;
  }
`;

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Main>
      <h2>Página não encontrada 👽</h2>
      <Button onClick={() => NavigateToHome(navigate)}>voltar para home</Button>
    </Main>
  );
}

export default ErrorPage;
