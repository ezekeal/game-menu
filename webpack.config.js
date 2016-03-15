module.exports = {
  entry: './src/index.js',

  output: {
    path: './dist',
    filename: 'index.js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.elm']
  },

  module: {
    noParse: /\.elm$/,

    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack?cwd=src'
      }
    ]
  },

  devServer: {
    inline: true,
    stats: 'errors-only'
  }
}
