import { GenreCard } from "../components/GenreCard";
import { useState } from "react";
import { useRequestData } from "../hooks/useRequestData";
import styled from "styled-components";
import { API_KEY, BASE_URL } from "../constantes/url";
import { MovieCard } from "../components/MovieCard";
import { Header } from "../components/Header";

const Div = styled.div`
  background-color: slateblue;
  align-items: center;
  align-items: center;
  text-align: center;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  font-size: 1.3em;
  color: white;
  padding : 5%;

  span {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;+
  }

  @media(max-width: 800px) {
    
    &::-webkit-scrollbar {
    display: none;
  }
}
  
`;

const H1 = styled.h1`
  background-color: slateblue;
  align-items: center;
  align-content: center;
  text-align:center;
  font-size: 2em;
  color: white;
  width: 97.45VW;
  height: 100PX;
  padding: 10% 0 0 0;
  margin: 0;
 
  @media(max-width: 800px) {
    width: 100px;
  height: 100PX;
  font-size: 1.7em;
  width: 100%;
  padding: 100px 0 0 0;
    
}
  
`;

const Span = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
  width: 90vw;
  margin-left: 0;


  @media(max-width: 800px) {
    
   display: flex;
   flex-direction: column;
   align-items: center;
   align-content: center;
   text-align: center;
   width: 300px;
  }
   `;

const Main = styled.main`


@media(max-width: 800px) {
  width: 100%;
}
 `;

const Page = styled.div`
  align-items: center;
  align-content: center;
  text-align: center;
  margin: 5%;
  
  button{
    background-color: lightgray;
    font-size: 1em;
    border-radius: 6%;
    padding: 1%;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    &:hover {
    background-color: orange;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    cursor: pointer;;
  }
  }
`;

export const HomePage = (props) => {

const [genre, setGenre] = useState(null);

const [page, setPage] = useState(1)

const [data] = useRequestData(BASE_URL,`genre/movie/list?${API_KEY}`, [])

const genres = data.genres

const [film] = useRequestData(BASE_URL,`movie/top_rated?${API_KEY}&page=${page}`, [])


const topRated = film.results

const changePage = (num) => {
  const nextPage = page + num;

  setPage(nextPage);
};



  return (
    <Main>
      <Header></Header>
      <H1>Milhões de filmes, séries e pessoas para descobrir. Explore já. </H1>
      <Div>
  
        <span>{genres?.map((item) => {
          return (
            <div onClick={() => {
              if(genre !== null){
              setGenre(null)}else
              setGenre(item.id)}
              }>
              <GenreCard key={item.name} genre={item.name} />
            </div>
          );
        })}</span>
     
    </Div>
    <Page>
        {( page > 1 &&  
          <button onClick={() => changePage(-1)}>Back Page</button>
        )}
        <span> Page: {page} </span>
        {(
          <button onClick={() => changePage(1)}>Next page</button>
        )}
      </Page>
    <Span>
    {topRated
    ? topRated.filter((rated) => {
              if (genre === null) return rated.id;
              else return rated.genre_ids.includes(genre)
            })
    .map((rated)=>{

      return <MovieCard movie={rated} ></MovieCard>
    })
    : <p>...carregando </p>}
   </Span>
   </Main>
  )
}
