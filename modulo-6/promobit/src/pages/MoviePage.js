import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { MovieDetailCard } from "../components/MovieDetailCard";
import { API_DETAIL, API_KEY } from "../constantes/url";
import { useRequestData } from "../hooks/useRequestData";
import { goToHome } from "../routes/coordinator";


export const MoviePage = () => {
  const params = useParams();


  const [data] = useRequestData(
    API_DETAIL,`${params.idFilme}?${API_KEY}`,
    []
  );
  const [video] = useRequestData(
    API_DETAIL,`${params.idFilme}/watch/providers?${API_KEY}`,
    []
  );

  const [recommendations] = useRequestData(
    API_DETAIL,`${params.idFilme}/recommendations?${API_KEY}`,
    []
  );


  const trailer = video.results

  return (
    <main>
      <Header></Header>
      <MovieDetailCard movie = {data} trailer = {trailer} recommendentions = {recommendations}/>
   </main>
  )
}