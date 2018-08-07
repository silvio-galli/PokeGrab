import React, { Component } from "react";
//import axios from "axios";
import "./App.css";
import Pokemon from "./components/Pokemon";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    let showPokemons = [];
    let randomNumbers = [];
    //let randomIndex = Math.floor(Math.random() * Math.floor(150));

    for (let i = 1; i < 21; i++) {
      randomNumbers.push(Math.ceil(Math.random() * Math.ceil(150)));
    }

    randomNumbers.map(randomNumber => {
      const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          showPokemons.push(data);
          this.setState({
            pokemons: showPokemons
          });
        });
    });
    console.log(randomNumbers, showPokemons);
  }

  // componentDidMount() {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/1`).then(response => {
  //     console.log("response data!!!", response.data);

  //     this.setState({
  //       pokemons: response.data.results.map((pokemon, i) => ({
  //         name: pokemon.name,
  //         url: pokemon.url,
  //         weight: pokemon.weight,
  //         id: i + 1
  //       })),
  //       name: response.data.results.name,
  //       weight: response.data.results.weight,
  //       sprites: response.data.results.sprites
  //     });
  //   });
  // }

  render() {
    console.log("222");
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon board</h1>
        </header>
        <div className="pokemons">
          {this.state.pokemons.map(pokemon => (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              weight={pokemon.weight}
              id={pokemon.id}
              img={pokemon.sprites.front_default}
            />
          ))}
        </div>
        <pre>{JSON.stringify(this.state.pokemons)}</pre>
      </div>
    );
  }
}

export default App;
