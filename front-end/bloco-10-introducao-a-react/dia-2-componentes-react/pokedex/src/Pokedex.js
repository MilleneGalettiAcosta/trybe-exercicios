import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const props = this.props.pokemons;
        return (
        <div className="pokedex">
            {props.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
        );
    }
}

export default Pokedex;