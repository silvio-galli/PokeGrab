import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Pokemons from './components/Pokemons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentWillMount() {
    let randomNumbers = [];
    //let calls = [];
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    
    for (let i = 1; i < 21; i++) {
      let randNum = Math.ceil(Math.random() * 150 );
      while( randomNumbers.includes( randNum ) ) {    // if the random number is already in the array 
        randNum = Math.ceil(Math.random() * 150 );    // we need to create a new random number
      }
      randomNumbers.push( randNum );
      // calls.push( axios.get(url + randNum) )  ---> uncomment if using Promise.all
    }
      
    // using axios ---> 11 sec.
    randomNumbers.map(randomNumber => {
      return axios.get( url + randomNumber.toString() )
      .then( poke => {
        let pokemons = this.state.pokemons;
        this.setState({
          pokemons: [...pokemons, poke.data]
        });
      });
    });
    


    // using fetch ---> 14 sec.
    
    // randomNumbers.map(randomNumber => {
      //   const url = "https://pokeapi.co/api/v2/pokemon/" + randomNumber;
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(poke => {
      //     let pokemons = this.state.pokemons;
    //     this.setState({
      //       pokemons: [...pokemons, poke]
    //     });
    //   });
    // });



    // Promise.all & axios ---> 15 sec.
    
    // Promise.all(calls)
    // .then( response => {
    //   console.log( "Promise.all resolved" );
    //   response.map( item => {
    //     let pokes = this.state.pokemons;
    //     this.setState({
    //       pokemons: [...pokes, item.data]
    //     })
    //   })
    // })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon board</h1>
        </header>

        <Pokemons pokemons={this.state.pokemons} />
      
      </div>
    );
  }
}

export default App;
