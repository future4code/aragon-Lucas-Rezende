import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToPost } from "../routes/coordinator";
import img from "../image/logo.png";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: Gainsboro;
  height: 100vh;
`;

const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  font-size: 1em;
  font-weight: 600;
  height: 7vh;
  border-radius: 10px;
  margin: 2%;

  &:hover {
    background-color: orange;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
`;

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Div>
      <img src={img} alt="logo do site" height="100px" />
      <h1>Página não encontrada!</h1>
      <Button onClick={() => goToPost(navigate)} goToPosts>
        Voltar para posts
      </Button>
    </Div>
  );
}
