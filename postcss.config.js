module.exports = {
    parser: 'postcss-scss',
    plugins: {
    'autoprefixer':{},
    'cssnano':{},
    'postcss-assets': {
      loadPath: "images/"
    }
    // 'postcss-sprites':{}
    }
  }
