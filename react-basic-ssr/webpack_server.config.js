const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // JavaScript 执行入口文件
  entry: './react-basic-ssr/main_server.js',
  target: 'node',
  externals: [nodeExternals()],
  mode: 'none',
  output: {
    libraryTarget: 'commonjs2',
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle_server.js',
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
        // CSS 代码不能被打包进用于服务端的代码中去，忽略掉 CSS 文件
        test: /\.less|\.css$/,
        use: ['ignore-loader'],
      },
    ]
  },
  devtool: 'source-map'
};