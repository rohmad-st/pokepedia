import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem';

const renderList = pokemons => (
  <Fragment>
    {pokemons.map(pokemon => renderListItem(pokemon))}
  </Fragment>
);

const renderListItem = pokemon => (
  <Fragment key={pokemon.id}>
    <PokemonListItem key={pokemon.id} payload={pokemon} />
  </Fragment>
);

const PokemonList = (props) => {
  return (
    <Fragment key={props.pokemons.toString()}>
      {renderList(props.pokemons)}
    </Fragment>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
