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
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'postcss-loader'
          ,'sass-loader'
        ], 
        exclude: /node_modules/ 
      },
      { test: /\.css$/, 
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true
      //     }
      //   }
      // }
      // ,
      { test: /\.svg$/, loader: 'url-loader?limit=8000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url-loader?limit=8000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url-loader?limit=8000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url-loader?limit=8000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url-loader?limit=8000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader?name=images/[name].[ext]'
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      }
      ,
      {
        test: /jquery[\\\/]src[\\\/]selector\.js$/, 
        loader: 'amd-define-factory-patcher-loader'
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(), //dedupe similar code 
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
  ]
}];

// var info = autoprefixer().info();
// console.log(info);