const path = require('path')
const copyPlugin = require('copy-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')

const getHTMLPlugins = (chunks) => {
  return chunks.map(
    (chunk) =>
      new htmlPlugin({
        title: 'React Extensions',
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  )
}

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    popup: path.resolve('src/pages/popup/index.tsx'),
    options: path.resolve('src/pages/options/index.tsx'),
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/i,
        include: /node_modules/,
      },
    ],
  },
  plugins: [
    new copyPlugin({
      patterns: [
        {
          from: path.resolve('src/manifest.json'),
          to: path.resolve('dist'),
        },
        {
          from: path.resolve('assets'),
          to: path.resolve('dist'),
        },
      ],
    }),
    ...getHTMLPlugins(['popup', 'options']),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
