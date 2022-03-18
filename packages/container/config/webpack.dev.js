const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const commonConfig = require('./webpack.common');
const dependencies = require('../package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html')
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        'marketing': 'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared: dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
