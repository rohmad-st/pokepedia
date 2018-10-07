import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const appElement = document.getElementById('app');
Modal.setAppElement(appElement);

const style = {};

const Column = (title, value) => (
  <div className="col col-md-4">
    <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
    <p className="card-text">{value}</p>
  </div>
);

const _combineDescriptions = (descriptions) => {
  if (!descriptions) return '-';
  return descriptions
    .filter(des => des.language.name === 'en')
    .map(des => des.description)
    .join(', ')
    .replace(/,(?!.*,)/gmi, ' and');
};

const _formatWeight = (weight) => {
  if (!weight) return 0;
  return `${(weight / 10)}kg`;
};

const _formatHeight = (height) => {
  if (!height) return 0;
  return `${(height / 10)}m`;
};

const PokemonDetail = ({ pokemon, isOpen, dispatch }) => {
  if (!pokemon) return null;
  const { name, descriptions, image, species, weight, height } = pokemon;
  const color = (species && species.color) ? species.color.name : '-';
  const shape = (species && species.shape) ? species.shape.name : '-';
  const habitat = (species && species.habitat) ? species.habitat.name : '-';

  return (
    <Modal
      className="Modal__Bootstrap modal-dialog modal-dialog-centered"
      closeTimeoutMS={150}
      isOpen={isOpen}
      style={style}
      onRequestClose={() => dispatch({ type: 'HIDE_DETAIL_POKEMON' })}
    >
      <div className="modal-content">
        <div className="modal-body bg-light">
          <div className="card-img-top">
            <img className="mx-auto d-block bg-dark rounded-circle"
              alt={name}
              style={{ height: '108px', width: '108px' }}
              src={image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title mx-auto d-block text-uppercase"
              style={{ textAlign: 'center', fontWeight: '600' }}>{name}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">Description</h6>
            <p className="card-text">{_combineDescriptions(descriptions)}</p>
            <div className="row row-modal">
              {
                [color].map(val => Column('Color', val))
              }
              {
                [shape].map(val => Column('Shape', val))
              }
              {
                [weight].map(val => Column('Weight', _formatWeight(val)))
              }
              {
                [height].map(val => Column('Height', _formatHeight(val)))
              }
              {
                [habitat].map(val => Column('Habitat', val))
              }
            </div>
          </div>
        </div>
        <div className="modal-footer bg-light"
          style={{ borderTop: 'none' }}
        >
          <button type="button"
            className="btn btn-secondary"
            onClick={() => dispatch({ type: 'HIDE_DETAIL_POKEMON' })}
          >Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

PokemonDetail.propTypes = {
  pokemon: PropTypes.object,
  isOpen: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

// CONFIGURE REACT REDUX
const mapStateToProps = state => {
  const { modalType, modalProps } = state.detail;
  return { modalType, modalProps };
};

export default connect(mapStateToProps)(PokemonDetail);
