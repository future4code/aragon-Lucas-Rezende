import styled from "styled-components";

const Div = styled.div`
  background-color: lightgray;
  border-radius: 10%;
  padding: 5%;
  margin: 2vw;
  width: 120px;
  color: black;

  &:hover {
    background-color: orange;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    cursor: pointer;
  }

  @media(max-width: 800px) {
    align-items: center;
    align-content: center;
    text-align: center;
    width:120px;
    font-size: 0.8em;
    margin-left: 20px;
    margin-right: 20px; 
    }
`;
export const GenreCard = (props) => {
  return (
    <Div key={props.genre}>
      <p>{props.genre}</p>
    </Div>
  );
};
