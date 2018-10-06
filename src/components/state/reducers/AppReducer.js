// IMPORT PACKAGE REFERENCES
import { combineReducers } from 'redux';

// IMPORT REDUCERS
import { FetchPokemonsReducer } from '../reducers/FetchPokemonsReducer';
import { DetailPokemonReducer } from '../reducers/DetailPokemonReducer';

// EXPORT APP REDUCER
export const AppReducer = combineReducers({
  pokemons: FetchPokemonsReducer,
  detail: DetailPokemonReducer,
});
