import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { goToHome } from "../routes/coordinator"

const Div = styled.div`
  background-color: darkslateblue;
  padding: 2%;

  img{
  width: 10%;
}


@media(max-width: 800px) {

  img{
  width: 50%;
}
   
}
`

export const Header = () => {
  
  const navigate = useNavigate()

  return (
    <Div>
      <img 
      onClick={()=>goToHome(navigate)}
      src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"/>
    </Div>
  )
} 