// import axios from 'axios';
import pokemons from './pokemons.data.json';

const simulateError = false;

export const fetchPokemons = () => {
  return new Promise((resolve, reject) => {
    // simulate lengthy service call
    setTimeout(() => {
      if (simulateError) {
        reject('Failed to fetch list of pokemons');
      } else {
        console.log('pokemons', pokemons);
        resolve(pokemons.results);
      }
    }, 1000);
  });
};

export const detailPokemon = (name) => {
  return new Promise((resolve, reject) => {
    // simulate to get a detail
    setTimeout(() => {
      if (simulateError) {
        reject('Failed to fetch list of pokemons');
      } else {
        const result = pokemons.results.filter(pokemon => pokemon.name === name);
        console.log('detail of pokemon', { name, result });
        if (!result || result.length === 0) return reject(`Pokemon with name: ${name} is not found.`);
        return resolve(result.pop());
      }
    }, 1000);
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
