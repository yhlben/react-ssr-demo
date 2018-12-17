const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const QiniuUploadPlugin = require('qiniu-upload-plugin');
const qiniuConfig = require('./qiniu.config');

const plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new QiniuUploadPlugin(qiniuConfig));
}

const clientConfig = {
  mode: process.env.NODE_ENV,
  entry: './src/client/index.jsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist/public')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  plugins: plugins,
  watch: process.env.NODE_ENV === 'development'
};

module.exports = merge(baseConfig, clientConfig);
