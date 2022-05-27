import Header from "../components/Header";
import TripList from "../components/TripList";
import styled from "styled-components";
import DecideForm from "../components/DecideForm";

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`;

function HomePage() {
  return (
    <Main>
      <Header activePage={"home-page"} />
      <h1>Inscreva-se numa viagem!</h1>
      <DecideForm />
      <hr></hr>
      <TripList />
    </Main>
  );
}

export default HomePage;
