// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

const PokemonListItem = ({ payload }) => {
  const image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png';
  const { name: title, species } = payload;
  return (
    <div className="col-md-3">
      <div className="card mb-3 shadow-sm" key={title.toString()}>
        <div className="card-img-top bg-dark">
          <img className="my-3 mx-auto d-block"
            alt={title}
            style={{ height: '208px', width: '208px' }}
            src={image}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-uppercase">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ (species && species.habitat && species.habitat.name) ? species.habitat.name : '-' }</h6>
        </div>
      </div>
    </div>
  );
};

PokemonListItem.propTypes = {
  payload: PropTypes.object.isRequired,
};

export default PokemonListItem;
