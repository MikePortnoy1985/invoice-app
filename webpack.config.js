'use strict';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.MODE !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : false,

  entry: path.resolve(__dirname, 'src/index'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    isDevelopment &&
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      }),
    isDevelopment && new ReactRefreshWebpackPlugin({ include: /\.(j|t)sx?$/ }),
    isDevelopment &&
      new ProgressBarPlugin({
        complete: '█',
        incomplete: '_',
        width: 50,
      }),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // Использование кэша для избежания рекомпиляции
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-classes',
                '@babel/plugin-transform-spread',
                isDevelopment && 'react-refresh/babel',
              ].filter(Boolean),
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: isDevelopment ? 'asset/resource' : 'asset',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['tailwindcss', 'autoprefixer'],
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
  },

  devServer: {
    static: ['dist'],
    open: true,
    hot: true,
    port: 3000,
    client: {
      progress: true,
      reconnect: 3,
    },
    historyApiFallback: {
      disableDotRule: true,
    },
  },

  optimization: {
    runtimeChunk: 'single', // fix для react hot refresh
  },

  infrastructureLogging: { level: 'warn' }, //убираем лишние логи dev-server
  stats: 'minimal',
};
