import Header from "../components/Header";
import TripList from "../components/TripList";
import styled from "styled-components";
import NewTrip from "../components/NewTrip";

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`;

function AdminPage() {
  return (
    <Main>
      <Header activePage={"admin-page"} token={"token"} />
      <h2>Crie em uma viagem!</h2>
      <NewTrip />
      <TripList />
    </Main>
  );
}

export default AdminPage;
