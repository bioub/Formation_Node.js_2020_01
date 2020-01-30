const HtmlWebpackPlugin = require('html-webpack-plugin');

function factory(_, { mode }) {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: mode === 'production' ? false : 'source-map',
    entry: './src/js/index.js',
    output: {
      filename: mode === 'production' ? 'app.[chunkHash].js' : 'app.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };

  return config;
}
module.exports = factory;
