// IMPORT PACKAGE REFERENCES
import { combineReducers } from 'redux';

// IMPORT REDUCERS
import { FetchPokemonsReducer, DetailPokemonReducer } from '../reducers/PokemonsReducer';

// EXPORT APP REDUCER
export const AppReducer = combineReducers({
  pokemons: FetchPokemonsReducer,
  detail: DetailPokemonReducer,
});
