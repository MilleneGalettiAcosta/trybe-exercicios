import './App.css';
import React, {Component} from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
  return (
    <>
   <h1 className="title">Pokedex</h1>
   <Pokedex  pokemons={pokemons} />
   </>
  );
  }
}
export default App;
