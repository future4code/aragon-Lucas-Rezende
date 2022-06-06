import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToLogin } from "../routes/coordinator";

export default function PostPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      goToLogin(navigate);
    }
  }, []);

  return (
    <div>
      <Header />
      <h1>POST</h1>
    </div>
  );
}
