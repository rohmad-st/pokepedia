/**
 * NOTED. I used the json data, bcoz absolutly can't access the API
 * Neither via POSTMAN or AJAX
 */

// import axios from 'axios';
import pokemons from './pokemons.data.json';

const SIMULATE_ERROR = false;
const DEFAULT_LIMIT = 8;
const DEFAULT_TIMEOUT = 250;

export const fetchPokemons = (page = 1) => {
  return new Promise((resolve, reject) => {
    // simulate lengthy service call
    setTimeout(() => {
      if (SIMULATE_ERROR) {
        reject('Failed to fetch list of pokemons');
      } else {
        const { results } = pokemons;
        const totalPage = Math.ceil(results.length / DEFAULT_LIMIT);
        const minIndex = Math.ceil((page - 1) * DEFAULT_LIMIT);
        const maxIndex = Math.ceil(page * DEFAULT_LIMIT);
        const paginationResults = results
          .filter((_, index) => {
            return (index >= minIndex) && (index < maxIndex);
          });
        const lastResult = {
          pagination: {
            limit: DEFAULT_LIMIT,
            page: page,
            next: (page === totalPage) ? '' : (page + 1),
            prev: (page === 1) ? '' : (page - 1),
          },
          pokemons: paginationResults
        };
        resolve(lastResult);
      }
    }, DEFAULT_TIMEOUT);
  });
};

export const detailPokemon = (name) => {
  return new Promise((resolve, reject) => {
    // simulate to get a detail
    setTimeout(() => {
      if (SIMULATE_ERROR) {
        reject('Failed to fetch list of pokemons');
      } else {
        const result = pokemons.results.filter(pokemon => pokemon.name === name);
        if (!result || result.length === 0) return reject(`Pokemon with name: ${name} is not found.`);
        return resolve(result.pop());
      }
    }, DEFAULT_TIMEOUT);
  });
};

// const httpClient = axios.create({
//   baseURL: process.env.api_host,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

// export const fetchPokemons = () => {
//   httpClient.get('/api/v2/pokemon', {})
//     .then(
//       response => Promise.resolve(response),
//       error => Promise.reject(error));
// };
