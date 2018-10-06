import {
  FETCH_POKEMONS_FULFILLED,
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_REJECTED,
  SHOW_DETAIL_POKEMON,
  SHOW_DETAIL_POKEMON_PENDING,
  SHOW_DETAIL_POKEMON_FULFILLED,
  HIDE_DETAIL_POKEMON
} from '../actions/PokemonActions';


const initialState = {
  pokemons: [],
  fetching: false,
  fetched: false,
  failed: false,
  modal: false,
  pokemon: {},
};

// const initialDetailState = {
//   modalType: null,
//   modalProps: {},
//   pokemon: {},
// };

export const FetchPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_FULFILLED:
      return {
        ...state,
        pokemons: action.payload,
        fetching: false,
        fetched: true,
        failed: false,
        modal: false,
        pokemon: {},
      };
    case FETCH_POKEMONS_PENDING:
      return {
        ...state,
        pokemons: [],
        fetching: true,
        fetched: false,
        failed: false,
        modal: false,
        pokemon: {},
      };
    case FETCH_POKEMONS_REJECTED:
      return {
        ...state,
        pokemons: [],
        fetching: true,
        fetched: false,
        failed: true,
        modal: false,
        pokemon: {},
      };
    default:
      return state;
  }
};

export const DetailPokemonReducer = (state = initialState, action) => {
  console.log('SHOW_DETAIL_POKEMON ---', { action, state });
  switch (action.type) {
    case SHOW_DETAIL_POKEMON:
      return {
        ...state,
        fetching: true,
        fetched: false,
        failed: false,
        modal: false,
        pokemon: {},
      };
    case SHOW_DETAIL_POKEMON_PENDING:
      return {
        ...state,
        fetching: true,
        fetched: false,
        failed: false,
        modal: true,
        pokemon: {},
      };
    case SHOW_DETAIL_POKEMON_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        failed: false,
        modal: true,
        pokemon: action.payload,
      };
    case HIDE_DETAIL_POKEMON:
      console.log('HIDE_DETAIL_POKEMON', initialState);
      return initialState;
    default:
      return state;
  }
};
