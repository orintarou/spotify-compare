var webpack = require('webpack');

module.exports = {
  entry: [ // Load webpac-dev-server and webpack modules. Load index.js as entry point.
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // Locate files with .js extension (JavaScript files)
        exclude: /node_modules/,
        loader: 'react-hot!babel' // Use babel first, then react-hot. Babel used due to ES6 syntax.
      },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist', // Location for the built files
    publicPath: '/',
    filename: 'bundle.js' // Name of the JS bundle file
  },
  devServer: {
    contentBase: './dist', // Target directory of the build code
  }
};
