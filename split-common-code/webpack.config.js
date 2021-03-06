const path = require('path');
const webpack = require('webpack')
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  // JavaScript 执行入口文件
  entry: './split-common-code/main.js',
  mode: 'none',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ]
  },
  optimization: {
    splitChunks: {
      name: 'commons',
      chunks: "all",
      minSize: 1, // 模块的最小体积
      minChunks: 2, // 模块的最小被引用次数
    }
  }
};