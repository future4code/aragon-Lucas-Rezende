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
`

export const CastingCard = (props) => {

  
  return (
    <Div>
    <img 
    padding= "20%" 
    width= "200" 
    src={`${API_IMG}${props.casting.profile_path}`}/>
    <h3>{props.casting.name}</h3>
    <p>{props.casting.character}</p>
    </Div>
  );
};
