import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

export default function Header() {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  const logout = () => {
    window.confirm("Você deseja sair?");
    alert("Logout feito com sucesso");
    window.localStorage.removeItem("token");
    goToLogin(navigate);
  };

  return (
    <div>
      <h1>LabEddit</h1>
      {token ? (
        <div>
          <h3>Bem Vindo ao LabEddit {localStorage.getItem("email")}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <></>
      )}
      <hr />
    </div>
  );
}
