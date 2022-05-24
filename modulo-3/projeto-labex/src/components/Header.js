import { useNavigate } from "react-router-dom";
import { NavigateToAdmin, NavigateToHome } from "../routes/coordinator";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  color: white;
`;

const Button = styled.button`
  background-color: purple;
  color: white;
  margin: 1%;
  padding: 5%;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  background-color: purple;
  color: white;
  margin: 10%;
`;

function Header(props) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();

  const handleInputEmail = (event) => setInputEmail(event.target.value);
  const handleInputPassword = (event) => setInputPassword(event.target.value);

  const token = localStorage.getItem("token");

  const login = () => {
    const body = {
      email: inputEmail,
      password: inputPassword,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("login realizado com sucesso!");
        NavigateToAdmin(navigate);
      })
      .catch((err) => alert("usuário e/ou senha errado!"));
  };

  const renderHeader = () => {
    switch (props.activePage) {
      case "home-page":
        return (
          <main>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <Input
              onChange={handleInputEmail}
              type="text"
              id="email"
              value={inputEmail}
            />
            <br />
            <label htmlFor="password">Senha:</label>
            <Input
              onChange={handleInputPassword}
              type="password"
              id="password"
              value={inputPassword}
            />
            <br />
            <Button onClick={login}>Login</Button>
          </main>
        );
      case "admin-page":
        return <Button onClick={logout}>Logout</Button>;
    }
  };

  useEffect(() => {
    if (!token) {
      NavigateToHome(navigate);
    }

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/3bUbdB1gvPzWrThpazVC",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    alert("logout realizado com sucesso!");
    NavigateToHome(navigate);
    console.log("foi");
  };

  return (
    <Main>
      <h1>🚀LabeX🛸</h1>
      <h4>Viagens inter-galáticas</h4>
      {renderHeader()}
      <hr></hr>
    </Main>
  );
}
export default Header;
