import React from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../components/state/stores/AppStore';
import Home from './pages/Home';

export const App = () => (
  <Provider store={createAppStore()}>
    <Home />
  </Provider>
);
