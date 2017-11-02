const webpack = require('webpack');
const path = require('path');

// including sass
module.exports = [{
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './src/index'],
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    // exclude: /node_modules/,
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader', exclude: /node_modules/ },
    ]
    // query: {
    //   presets: ["react", "es2015", "stage-1"]
    // }
  },
  resolve: {
    extensions: ['.js','.sass', ".jsx"]
  }
  ,devServer: {
  contentBase: './public',
  hot: true
}
  ,plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM:'react-dom'
    }),
    new webpack.NoErrorsPlugin()
    // new webpack.NoEmitOnErrorsPlugin()
  ]
}];