const webpack = require('webpack');
const path = require('path');
var autoprefixer = require("autoprefixer");

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
    rules: [
      { test: /\.js?$/, 
        use: ["babel-loader"], 
        exclude: /node_modules/,
        },
      { test: /\.sass$/, 
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
          ,'sass-loader'
        ], 
        exclude: /node_modules/ 
      }
      ,
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000 /* 小於 10kB 的圖片轉成 base64 */
            }
          }
        ]
      }
    ]
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

var info = autoprefixer().info();
console.log(info);