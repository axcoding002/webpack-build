const path = require('path');

const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    print: {
      import: './src/print.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  // Using source maps
  // https://webpack.js.org/guides/development/#using-source-maps
  devtool: 'inline-source-map',
  // Using webpack-dev-server
  // https://webpack.js.org/guides/development/#using-webpack-dev-server
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  // Setting up HtmlWebpackPlugin
  // https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
  plugins: [
    new LodashModuleReplacementPlugin({
      /* Create smaller Lodash builds by replacing feature sets of modules with noop, identity, or simpler alternatives.
      This plugin complements babel-plugin-lodash by shrinking its cherry-picked builds even further!
      DISCLAIMER: Using this plugin without enabling the proper feature sets may cause
      lodash functions to behave in unexpected ways. 
      Methods may appear to work, however they might return incorrect results. 
      https://github.com/lodash/lodash-webpack-plugin */
      shorthands: false, // Iteratee shorthands for _.property, _.matches, & _.matchesProperty
      cloning: false, // Support “clone” methods & cloning source objects.
      currying: false, // Support “curry” methods.
      caching: false, // Caches for methods like _.cloneDeep, _.isEqual, & _.uniq.
      collections: false, // Support objects in “Collection” methods.
      exotics: false, // Support objects like buffers, maps, sets, symbols, typed arrays, etc.
      guards: false, // Guards for host objects, sparse arrays, & other edge cases.
      metadata: false, // Metadata to reduce wrapping of bound, curried, & partially applied functions. (requires currying)
      deburring: false, // Support deburring letters.
      unicode: false, // Support Unicode symbols.
      chaining: false, // Components to support chain sequences.
      memoizing: false, // Support _.memoize & memoization.
      coercions: false, // Support for coercing values to integers, numbers, & strings.
      flattening: false, // Support “flatten” methods & flattening rest arguments.
      paths: false, // Deep property path support for methods like _.get, _.has, & _.set.
      placeholders: false, // Argument placeholder support for “bind”, “curry”, & “partial” methods. (requires currying)
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
    new BundleAnalyzerPlugin({
      /* Webpack plugin and CLI utility that represents bundle content as
      convenient interactive zoomable treemap */
      analyzerMode: 'static'
      analyzerHost:
      analyzerPort:
      analyzerUrl:
      reportFilename:
      reportTitle:
      defaultSizes:
      openAnalyzer:
      generateStatsFile:
      statsFilename:
      statsOptions:
      excludeAssets:
      logLevel:
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // Cleaning up the /dist folder
    // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
    clean: true,
    // Using webpack-dev-middleware
    // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // Loading CSS
        // https://webpack.js.org/guides/asset-management/#loading-css
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        // Loading Images
        // https://webpack.js.org/guides/asset-management/#loading-images
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        // Loading Fonts
        // https://webpack.js.org/guides/asset-management/#loading-fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        // Loading Data
        // https://webpack.js.org/guides/asset-management/#loading-data
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        // Loading Data
        // https://webpack.js.org/guides/asset-management/#loading-data
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        // Customize parser of JSON modules
        // https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        // Customize parser of JSON modules
        // https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        // Customize parser of JSON modules
        // https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};