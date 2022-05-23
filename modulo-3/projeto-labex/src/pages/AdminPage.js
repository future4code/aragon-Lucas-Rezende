import Header from "../components/Header";
import TripList from "../components/TripList";

function AdminPage() {
  return (
    <div>
      <Header activePage={"admin-page"} />
      <h3>Crie uma nova viagem!</h3>
      <hr></hr>
      <TripList />
    </div>
  );
}

export default AdminPage;
