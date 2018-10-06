import React from 'react';
import Info from '../Sections/Info';
import { PokemonBrowser } from '../PokemonBrowser/PokemonBrowser';
import PokemonDetail from '../modals/PokemonDetail';

const Home = () => (
  <main>
    <Info />
    <div className="text-dark bg-light animated fadeIn py-5">
      <div className="container">
        <PokemonBrowser />
        <PokemonDetail description="anonymous" />
      </div>
    </div>
  </main>
);

export default Home;
