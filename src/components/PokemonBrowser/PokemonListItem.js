import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PokemonListItem = (props) => {
  const { name, image, species } = props.payload;
  return (
    <div className="col-md-3"
      onClick={() => props.dispatch({
        type: 'SHOW_DETAIL_POKEMON',
        modalType: 'DETAIL_POKEMON',
        modalProps: props.payload
      })}>
      <div className="card mb-3 shadow-sm" key={name.toString()}>
        <div className="card-img-top bg-dark">
          <img className="my-3 mx-auto d-block"
            alt={name}
            style={{ height: '108px', width: '108px' }}
            src={image}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-uppercase">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {(species && species.habitat && species.habitat.name) ? species.habitat.name : '-'}
          </h6>
        </div>
      </div>
    </div>
  );
};

PokemonListItem.propTypes = {
  payload: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// CONFIGURE REACT REDUX
const mapStateToProps = state => {
  const { modalType, modalProps, pokemon } = state.detail;
  return { modalType, modalProps, pokemon };
};

export default connect(mapStateToProps)(PokemonListItem);
