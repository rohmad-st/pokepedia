import { fetchPokemons, detailPokemon } from '../../../services/PokemonService';

// FETCH POKEMON LIST
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_POKEMONS_PENDING = 'FETCH_POKEMONS_PENDING';
export const FETCH_POKEMONS_FULFILLED = 'FETCH_POKEMONS_FULFILLED';
export const FETCH_POKEMONS_REJECTED = 'FETCH_POKEMONS_REJECTED';

// DETAIL OF POKEMON
export const SHOW_DETAIL_POKEMON = 'SHOW_DETAIL_POKEMON';
export const HIDE_DETAIL_POKEMON = 'HIDE_DETAIL_POKEMON';

const fetchPokemonsAction = (page = 1) => ({
  type: FETCH_POKEMONS,
  payload: fetchPokemons(page)
});

const detailPokemonsAction = (name) => ({
  type: SHOW_DETAIL_POKEMON,
  payload: detailPokemon(name)
});

const hideDetailPokemonsAction = () => ({
  type: HIDE_DETAIL_POKEMON
});

export {
  fetchPokemonsAction as fetchPokemons,
  detailPokemonsAction as detailPokemon,
  hideDetailPokemonsAction as hideDetailPokemon,
};
