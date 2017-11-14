const webpack = require('webpack');
const path = require('path');
const autoprefixer = require("autoprefixer");

// including sass
module.exports = [{
  entry: {
    app:     
      [
        'eventsource-polyfill',
        './src/index'
      ]
  },
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
      { test: /\.sass/, 
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
          ,'sass-loader'
        ], 
        exclude: /node_modules/ 
      },
      { test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader'
        ]
        // ,exclude: /node_modules/ 
      }
      ,{
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [ 'file-loader?name=fonts/[name].[ext]' ]
      },
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
  },
  devServer: {
    port: process.env.PORT || 5000,
    host: "localhost",
    contentBase: "./public",
    historyApiFallback: true,
    hot: true,
    inline: true
  }
  ,plugins:[
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}];

var info = autoprefixer().info();
console.log(info);