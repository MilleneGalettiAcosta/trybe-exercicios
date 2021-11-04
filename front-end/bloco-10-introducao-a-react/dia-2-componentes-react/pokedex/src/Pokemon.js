import React from 'react';
import Prototypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon: {name, type, averageWeight, image} } = this.props;
        return(
    <div className="pokemon"> 
    <ul className="list">
    <li>{name}</li>
    <li>{type}</li>
    <li>{`Average Weight: ${averageWeight.value}${averageWeight.measurementUnit}`}</li>
    </ul>
    <img src={ image } alt={`${name} sprite`} />
    </div>
        );
    }
}

Pokemon.propTypes = {
    pokemon: Prototypes.shape({ 
        name: Prototypes.string,
        type: Prototypes.string,
        averageWeight: Prototypes.shape({ 
        measurementUnit: Prototypes.string,
        value: Prototypes.number,
        }),
        image: Prototypes.string,
    }).isRequired,
};

export default Pokemon;