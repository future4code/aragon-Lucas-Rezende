import { API_DETAIL, API_IMG, API_KEY } from "../constantes/url";
import { RecommendentionCard } from "./RecommendentionCard";
import styled from "styled-components";
import { useRequestData } from "../hooks/useRequestData";
import { CastingCard } from "./CastingCard";

const Span = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const Iframe = styled.iframe`
  margin: 2%;
  @media (max-width: 800px) {
    width: 400px;
    height: 250px;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Poster = styled.div`
  background-color: slateblue;
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 5%;

  img {
    margin: 20% 0 0 0;
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const Poster2 = styled.div`
 display: none;

  @media (max-width: 800px) {
    background-color: slateblue;
    align-items: center;
    align-content: center;
    text-align: center;
    padding: 5%;
    display: block;

    img {
      margin: 20% 0 0 0;
      width: 50%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;

const Description = styled.div`
  background-color: slateblue;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 2%;
  font-size: 1.3em;

  @media (max-width: 800px) {
    width: 92.5vw;
    text-align: center;
  }
`;

const Casting = styled.div`
  align-items: center;
  align-items: center;
  text-align: center;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;

  span {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Recommendention = styled.div`
  align-items: center;
  align-items: center;
  text-align: center;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;

  span {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const MovieDetailCard = (props) => {
  const [video] = useRequestData(
    API_DETAIL,
    `${props.movie.id}/videos?${API_KEY}`
  );

  const [credits] = useRequestData(
    API_DETAIL,
    `${props.movie.id}/credits?${API_KEY}`
  );

  // const [certification] = useRequestData(API_DETAIL,`${props.movie.id}/credits?${API_KEY}`)

  const date = new Date(props.movie.release_date);

  const converter = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = `00${horas}`.slice(-2);
    const textoMinutos = `00${min}`.slice(-2);

    return `${textoHoras}h:${textoMinutos}min`;
  };

  const genre = props.movie;

  const genreName =
    genre.length !== 0 ? (
      genre.genres.map((genre) => {
        return genre.name;
      })
    ) : (
      <p>...carregando</p>
    );

  const recommendentions = props.recommendentions;

  const avarage = props.movie.vote_average;

  const trailer = video?.results[0];

  return (
    <div>
      <Div>
        <Poster>
          <img src={`${API_IMG}${props.movie?.poster_path}`} />
        </Poster>
        <Description>
          <Poster2>
            <img src={`${API_IMG}${props.movie?.poster_path}`} />
          </Poster2>
          <h2>{`${props.movie?.title} (${date.getFullYear()})`}</h2>
          <p>
            {props.movie?.release_date} - {genreName?.toString()}
          </p>
          <h3>Duração</h3>
          <p>{converter(props.movie.runtime)}</p>
          <h3>Avaliação</h3>
          <p>⭐{avarage?.toFixed(1)}</p>
          <h3>Sinopse</h3>
          <p>{props.movie?.overview}</p>
        </Description>
      </Div>
      <H2>Casting</H2>
      <Casting>
        <span>
          {credits?.cast?.slice(0, 10).map((casting) => {
            return (
              <div>
                <CastingCard casting={casting}></CastingCard>
              </div>
            );
          })}
        </span>
      </Casting>
      <H2>Trailer</H2>
      <Span>
        <Iframe
          width="800"
          height="400"
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Span>
      <H2>Recomendações</H2>
      <Recommendention>
        <span>
          {recommendentions?.results?.map((film) => {
            return (
              <div>
                <RecommendentionCard movie={film}></RecommendentionCard>
              </div>
            );
          })}
        </span>
      </Recommendention>
    </div>
  );
};
