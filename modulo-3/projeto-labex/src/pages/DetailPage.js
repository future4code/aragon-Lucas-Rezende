import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

function DetailPage() {
  const [details, setDetails] = useState({});

  const getTripDetail = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-rezende-aragon/trip/${id}`;

    axios
      .get(url, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setDetails(res.data.trip);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <main>
      <Header activePage={"detail-page"} token={"token"} />
      {details.name}
    </main>
  );
}

export default DetailPage;
