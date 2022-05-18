import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import "./App.css";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 0;
`;

const H1 = styled.h1`
  color: #1c1c1c;
`;

const Header = styled.header`
  text-shadow: 2px 2px black;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  background-color: red;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Visor = styled.main`
  border: 20px solid skyblue;
`;

const Nav = styled.nav`
  background-color: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 98%;
  padding: 1%;
`;

const Label = styled.label`
  margin: 1%;
  color: white;
`;

const Select = styled.select`
  &:hover {
    background-color: skyblue;
  }
`;

function App(props) {
  // Passo 3b
  // Implemente suas variáveis de estado aqui.

  const [listaPokemon, setListaPokemon] = useState([]);
  const [pokemonSelecionado, setPokemonSelecionado] = useState("");

  // Passo 3c

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setListaPokemon(res.data.results);
      })
      .catch((err) => {
        console.error("Erro ao buscar Pokemons!");
      });
  }, []);

  // componentDidMount = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  //     .then((res) => {
  //       this.setState({ pokeList: res.data.results });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Passo 3a
  const changePokemon = (event) => {
    // Passo 3d

    setPokemonSelecionado(event.target.value);

    // Implementa a função aqui.
  };

  // Passo 3e
  // const pokeOptions = this.state.pokeList.map(pokemon => {
  //   return (
  //     <option key={pokemon.name} value={pokemon.name}>
  //       {pokemon.name}
  //     </option>
  //   );
  // });

  // Passo 4a
  const pokemon = true && <PokeCard pokemonSelecionado={pokemonSelecionado} />;

  return (
    <Main>
      <Header>
        <H1>POKÉDEX</H1>
      </Header>
      <Nav>
        <Label htmlFor={"pokemon selecionado"}>Escolha um pokemon: </Label>
        <Select value={pokemonSelecionado} onChange={changePokemon}>
          <option value={""}>Nenhum</option>
          {listaPokemon.map((pokemon) => {
            return (
              <option value={pokemon.name} key={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </Select>
      </Nav>
      <Visor>{pokemon}</Visor>
    </Main>
  );
}

export default App;
