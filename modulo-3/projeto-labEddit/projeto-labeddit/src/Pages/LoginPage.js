import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToPost, goToSignup } from "../routes/coordinator";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://labeddit.herokuapp.com/users/login", form)
      .then((res) => {
        alert("Bem vindo ao labEddit");
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("email", form.email);
        goToPost(navigate);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <h2>Login</h2>
      <form onSubmit={login}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={onChangeForm}
          required
        />
        <br />
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          name="password"
          value={form.password}
          onChange={onChangeForm}
          type="password"
          required
        />
        <br />
        <button>Entrar</button>
      </form>
      <hr />
      <h2>Não tem cadastro? cadastre-se agora:</h2>
      <button onClick={() => goToSignup(navigate)}>cadastrar</button>
    </div>
  );
}
