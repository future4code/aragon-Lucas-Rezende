import { useNavigate } from "react-router-dom";
import { NavigateToHome } from "../routes/coordinator";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Página não encontrada</h2>
      <button onClick={() => NavigateToHome(navigate)}>voltar para home</button>
    </div>
  );
}

export default ErrorPage;
