import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/app/App';

export default function Main() {
  return (
    <App />
  );
}

AppRegistry.registerComponent('movie-search-frontend', () => Main);
