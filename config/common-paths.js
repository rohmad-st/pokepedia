const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'public'),
  root: path.resolve(__dirname),
  template: './src/index.html',
  favicon: './src/favicon.ico',
  api_host: '"https://pokeapi.co"',
};
