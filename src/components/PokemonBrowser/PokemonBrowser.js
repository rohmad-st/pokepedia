// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import PokemonList from './PokemonList';
import PokemonDetail from '../modals/PokemonDetail';
import { fetchPokemons } from '../state/actions/PokemonActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';

// COMPONENT
class PokemonBrowser extends Component {

  constructor(props) {
    super(props);

    this._onClickNext = this._onClickNext.bind(this);
    this._onClickPrev = this._onClickPrev.bind(this);
  }

  componentDidMount() {
    this.props.fetchPokemons(1);
  }

  _onClickNext() {
    const { next } = this.props.pagination;
    if (!next) return;
    this.props.fetchPokemons(next);
  }

  _onClickPrev() {
    const { prev } = this.props.pagination;
    if (!prev) return;
    this.props.fetchPokemons(prev);
  }

  render() {
    return (
      <div className="row">
        {
          this.props.fetched && this.props.pokemons
          && <PokemonList pokemons={this.props.pokemons} />
        }
        {
          this.props.fetched && this.props.pokemons
          && <div className="mx-auto" style={{ marginTop: '20px' }}>
            <button type="button"
              className="btn btn-primary btn-lg"
              style={{ marginRight: '20px' }}
              disabled={!this.props.pagination.prev}
              onClick={this._onClickPrev}
            >
              <i className="fas fa-arrow-left"></i> Prev
            </button>
            <button type="button"
              className="btn btn-secondary btn-lg"
              disabled={!this.props.pagination.next}
              onClick={this._onClickNext}
            >
              Next <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        }
        {
          (this.props.modalType && this.props.modalType === 'DETAIL_POKEMON') &&
          <PokemonDetail pokemon={this.props.modalProps} isOpen={true} />
        }
        {
          <LoadingIndicator busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch list of pokemons" />
        }
      </div>
    );
  }
}

PokemonBrowser.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  pokemons: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  pokemon: PropTypes.object,
};

// CONFIGURE REACT REDUX
const mapStateToProps = state => {
  const { pokemons, fetching, fetched, failed, pagination } = state.pokemons;
  const { modalType, modalProps, pokemon } = state.detail;
  return { pokemons, fetching, fetched, failed, modalType, modalProps, pokemon, pagination };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPokemons }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PokemonBrowser);
export { hoc as PokemonBrowser };
