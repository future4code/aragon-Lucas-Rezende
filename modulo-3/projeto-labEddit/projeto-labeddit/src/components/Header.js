import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";
import img from "../image/logo.png";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1.5fr;
  align-content: space-between;
  align-items: center;
  width: 98%;
  background-color: Gainsboro;
  padding: 1%;
  text-align: center;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  font-size: 1em;
  font-weight: 600;
  width: 70px;
  height: 70px;
  border-radius: 40px;
  &:hover {
    background-color: orange;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  const logout = () => {
    window.confirm("Você deseja sair?");
    alert("Logout feito com sucesso");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("email");
    goToLogin(navigate);
  };

  return (
    <Div>
      <img src={img} alt="logo do site" height="100px" />
      <h3>
        Seja bem Vindo a maior comunidade dev do Brasil{" "}
        {localStorage.getItem("email")}
      </h3>
      {token ? (
        <div>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <></>
      )}
    </Div>
  );
}
