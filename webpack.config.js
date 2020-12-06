const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = env => {

  return {
    entry: './src/app.js',
    devServer: {
      publicPath: '/dist',
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new Dotenv({
        path: './.env', 
        safe: true ,
        systemvars: true,
      })
    ]
  };
};