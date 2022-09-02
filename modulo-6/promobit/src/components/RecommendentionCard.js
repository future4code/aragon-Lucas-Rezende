import { API_IMG } from "../constantes/url";
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
margin-right: 20px;

 img{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 }

`;

export const RecommendentionCard = (props) => {


  return (
    <Div>
    <img  
    width= "200" 
    src={`${API_IMG}${props.movie.poster_path}`}/>
    <p>{props.movie.title}</p>
    <p>{props.movie.release_date}</p>
    </Div>
  );
};
