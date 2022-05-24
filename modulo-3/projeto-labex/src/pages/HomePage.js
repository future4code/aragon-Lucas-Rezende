import Header from "../components/Header";
import TripList from "../components/TripList";
import styled from "styled-components";

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: rigth;
`;

function HomePage() {
  return (
    <Main>
      <Header activePage={"home-page"} />
      <h3>Inscreva-se numa viagem!</h3>
      <hr></hr>
      <TripList />
    </Main>
  );
}

export default HomePage;
