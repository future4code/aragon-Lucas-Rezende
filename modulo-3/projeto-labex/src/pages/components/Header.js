import { useNavigate } from "react-router-dom";
import { NavigateToAdmin, NavigateToHome } from "../routes/coordinator";

function Header(props) {
  const navigate = useNavigate();

  const button = () => {
    switch (props.activePage) {
      case "home-page":
        return (
          <button onClick={() => NavigateToAdmin(navigate)}>entrar</button>
        );
      case "admin-page":
        return <button onClick={() => NavigateToHome(navigate)}>logout</button>;
    }
  };

  return (
    <header>
      <h2>LabeX</h2>
      {button()}
      <hr></hr>
    </header>
  );
}
export default Header;
