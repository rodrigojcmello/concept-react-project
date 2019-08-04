const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = { NODE_ENV: '' }) => {
  const prod = env.NODE_ENV === 'production';
  const config = {
    mode: 'development',
    entry: './src/App.tsx',
    watch: true,
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, './dist')
    },
    plugins: [new webpack.ProgressPlugin()],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: !prod
                        ? 'last 1 chrome version'
                        : ['> 1%', 'ie 10']
                    }
                  ],
                  '@babel/preset-react',
                  '@babel/preset-typescript'
                ],
                plugins: ['babel-plugin-emotion'],
                cacheDirectory: true
              }
            }
          ],
          include: [path.resolve(__dirname, 'src')],
          exclude: [/node_modules/]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/
          }
        },
        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        name: true
      }
    },
    resolve: { extensions: ['.tsx', '.ts', '.js'] }
  };
  if (prod) {
    config.plugins.push(new CleanWebpackPlugin());
    config.plugins.push(
      new HtmlWebpackPlugin({ template: './index-prod.html' })
    );
  } else {
    config.devtool = 'eval-source-map';
    config.devServer = { historyApiFallback: true };
    config.externals = { react: 'React', 'react-dom': 'ReactDOM' };
    config.plugins.push(
      new HtmlWebpackPlugin({ template: './index-dev.html' })
    );
  }
  return config;
};
