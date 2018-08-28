import React from 'react';
import PokemonItem from "./PokemonItem";

class Pokemons extends React.Component {
  
  render() {
    let pokemons = this.props.pokemons.map(pokemon => (
      <PokemonItem key={pokemon.id} name={pokemon.name} weight={pokemon.weight} id={pokemon.id} img={pokemon.sprites.front_default} />
    ))
    return (
      <div className="pokemons">
        { pokemons }
      </div>
    )
  }
}

export default Pokemons;