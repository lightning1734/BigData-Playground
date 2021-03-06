const path = require('path');

const rules = [{
  test: /\.js|jsx$/,
  exclude: [
    path.resolve(__dirname, 'node_modules'),
  ],
  use: {
    loader: 'babel-loader',
  },
}, 
{
  test:/\.tsx?$/,
  exclude: [
    path.resolve(__dirname, 'node_modules'),
  ],
  use: {
    loader: 'awesome-typescript-loader',
  },

},
{
  test: /\.less$/,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
    options: {
      modules: true,
      camelCase: true,
      importLoaders: 1,
      localIdentName: '[local]--[hash:base64:5]',
    },
  }, {
    loader: 'postcss-loader',
    options: {
      config: {
        path: path.resolve(__dirname, './postcss.config.js'),
      },
    },
  }, {
    loader: 'less-loader',
  }],
}];

const externals = {
  react: {
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react',
  },
};

module.exports = {
  module: {
    rules,
  },
  externals,
};
