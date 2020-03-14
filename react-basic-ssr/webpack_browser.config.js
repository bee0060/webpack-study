const path = require('path');

module.exports = {
  // JavaScript 执行入口文件
  entry: './react-basic-ssr/main_browser.js',
  mode: 'none',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle_browser.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ]
  },
  devtool: 'source-map'
};