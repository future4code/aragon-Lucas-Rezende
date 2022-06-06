import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <div>
      <header />
      <h2>Cadastrete-se</h2>
      <button onClick={() => goBack(navigate)}>voltar</button>
    </div>
  );
}
