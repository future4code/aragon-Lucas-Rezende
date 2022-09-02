import { useNavigate } from "react-router-dom";
import { API_IMG } from "../constantes/url";
import { goToMovie } from "../routes/coordinator";
import styled from "styled-components";

const Div = styled.div`
  align-items: center;
  align-content:center;
  text-align: center;
  padding: 20%;
  width: 150px;
  margin-left: 30%;


  @media(max-width: 800px) {
  align-items: center;
  align-content: center;
  text-align: center;
  font-size: 1.5em;
  width: 300px;
    img{
      align-items: center;
      align-content:center;
      text-align: center;
      width: 250px;
    }
    
   }
`

export const MovieCard = (props) => {
  
  const navigate = useNavigate()
  
  return (
    <Div>
    <img  
    onClick={()=> goToMovie(navigate,props.movie.id)}
    width= "200" 
    src={`${API_IMG}${props.movie.poster_path}`}/>
    <h3>{props.movie.title}</h3>
    <p>{props.movie.release_date}</p>
    </Div>
  );
};
