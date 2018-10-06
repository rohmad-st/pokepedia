import {
  FETCH_POKEMONS_FULFILLED,
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_REJECTED,
} from '../actions/PokemonActions';


const initialState = {
  pokemons: [],
  fetching: false,
  fetched: false,
  failed: false,
};

export const FetchPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_FULFILLED:
      return {
        ...state,
        pokemons: action.payload,
        fetching: false,
        fetched: true,
        failed: false,
      };
    case FETCH_POKEMONS_PENDING:
      return {
        ...state,
        pokemons: [],
        fetching: true,
        fetched: false,
        failed: false,
      };
    case FETCH_POKEMONS_REJECTED:
      return {
        ...state,
        pokemons: [],
        fetching: true,
        fetched: false,
        failed: true,
      };
    default:
      return state;
  }
};
