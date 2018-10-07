import {
  FETCH_POKEMONS_FULFILLED,
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_REJECTED,
} from '../actions/PokemonActions';


const defaultPagination = {
  limit: 8,
  page: 1,
  next: '',
  prev: '',
};
const initialState = {
  pokemons: [],
  fetching: false,
  fetched: false,
  failed: false,
  pagination: {...defaultPagination}
};

export const FetchPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_FULFILLED:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        fetching: false,
        fetched: true,
        failed: false,
        pagination: {...action.payload.pagination},
      };
    case FETCH_POKEMONS_PENDING:
      return {
        ...state,
        pokemons: [],
        fetching: true,
        fetched: false,
        failed: false,
        pagination: {...defaultPagination},
      };
    case FETCH_POKEMONS_REJECTED:
      return {
        ...state,
        pokemons: [],
        fetching: true,
        fetched: false,
        failed: true,
        pagination: {...defaultPagination},
      };
    default:
      return state;
  }
};
