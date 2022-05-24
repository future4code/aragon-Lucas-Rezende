import Header from "../components/Header";
import TripList from "../components/TripList";
import styled from "styled-components";

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
      <Header activePage={"admin-page"} />
      <h3>Crie uma nova viagem!</h3>
      <hr></hr>
      <TripList />
    </Main>
  );
}

export default AdminPage;
