import axios from "axios";
import { useEffect, useState } from "react";

function PokeCard(props) {
  // Passo 4b
  const [dadosPokemon, setDadosPokemon] = useState({});
  // Implementa suas variáveis de estado aqui.

  // Passo 4c
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonSelecionado}`)
      .then((res) => {
        setDadosPokemon(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.pokemonSelecionado]);
  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokeName);
  // };

  // Passo 4c
  // componentDidUpdate(prevProps) {
  //   if (prevProps.pokeName !== this.props.pokeName) {
  //     this.pegaPokemon(this.props.pokeName);
  //   };
  // };

  // Passo 4c

  // pegaPokemon = (pokeName) => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  //     .then((res) => {
  //       this.setState({ pokemon: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  console.log(dadosPokemon);
  return (
    <figure>
      <strong>{dadosPokemon.name}</strong>
      {}
      <p>Peso: {dadosPokemon.weight} Kg</p>

      <p>Tipo: {dadosPokemon.types && dadosPokemon.types[0].type.name}</p>

      {dadosPokemon.sprites && (
        <img src={dadosPokemon.sprites.front_default} alt={dadosPokemon.name} />
      )}
    </figure>
  );
}
export default PokeCard;
