import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem';

const renderList = pokemons => (
  <Fragment>
    {pokemons.map(pokemon => renderListItem(pokemon))}
  </Fragment>
);

const renderListItem = pokemon => (
  <Fragment key={pokemon.name}>
    <PokemonListItem key={pokemon.name} payload={pokemon} />
  </Fragment>
);

const PokemonList = props => (
  <Fragment>
    {renderList(props.pokemons)}
  </Fragment>
);

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
