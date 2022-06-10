import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToLabeX } from "../routes/coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      alert("Você precisa se logar para acessar essa página!");
      navigateToLabeX(navigate);
    }
  }, []);
};
