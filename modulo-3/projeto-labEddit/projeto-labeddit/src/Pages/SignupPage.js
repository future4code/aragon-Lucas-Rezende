import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Url } from "../constants/urls";
import { goBack, goToPost } from "../routes/coordinator";

export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    });
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post(`${Url}/users/signup`, form)
      .then((res) => {
        alert("Usuário cadastrado com sucesso!");
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
      <h2>Cadastrete-se</h2>

      <form onSubmit={signup}>
        <label htmlFor={"name"}> Nome: </label>
        <input
          id={"name"}
          name={"username"}
          value={form.name}
          onChange={onChange}
          required
        />
        <br />
        <label htmlFor={"email"}> E-mail: </label>
        <input
          id={"email"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <br />
        <label htmlFor={"password"}> Senha: </label>
        <input
          id={"password"}
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
        />
        <br />
        <button type={"submit"}>Cadastrar</button>
      </form>
      <button onClick={() => goBack(navigate)}>voltar</button>
    </div>
  );
}
