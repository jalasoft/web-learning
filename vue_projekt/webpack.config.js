const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    styles: './src/main.scss'
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader','css-loader']},
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', { loader: 'sass-loader', options: { implementation: require('sass')}}]}
    ]
  },
  plugins: [
    new VueLoaderPlugin(), 
    new HtmlWebpackPlugin({ 
      template: './src/index.html',
      excludeAssets: [/styles.js/]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackExcludeAssetsPlugin()
  ]
}
