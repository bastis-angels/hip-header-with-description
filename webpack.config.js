const path = require('path');

const SRC_DIR = path.join(__dirname, '/Client/src');

const DIST_DIR = path.join(__dirname, '/Client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env', 'babel-preset-airbnb'],
        },
      },
    ],
  },
};
