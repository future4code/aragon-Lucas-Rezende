import Header from "../components/Header";
import TripList from "../components/TripList";

function HomePage() {
  return (
    <div>
      <Header activePage={"home-page"} />
      <h3>Inscreva-se numa viagem!</h3>
      <hr></hr>
      <TripList />
    </div>
  );
}

export default HomePage;
