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
  }

  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    return (
      <div className="row">
        {
          this.props.fetched && this.props.pokemons
            && <PokemonList pokemons={this.props.pokemons} />
        }
        {
          this.props.modal && this.props.pokemon
            && <PokemonDetail pokemon={this.props.pokemon} />
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
  pokemon: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired,
};

// CONFIGURE REACT REDUX
const mapStateToProps = state => {
  const { pokemons, fetching, fetched, failed, modal, pokemon } = state.pokemons;
  return { pokemons, fetching, fetched, failed, modal, pokemon };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPokemons }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PokemonBrowser);
export { hoc as PokemonBrowser };
