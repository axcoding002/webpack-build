const path = require('path');

const Webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: path.resolve(__dirname, 'src', 'index.js'),
      dependOn: 'shared',
    },
    print: {
      import: path.resolve(__dirname, 'src', 'js','print.js'),
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  // https://webpack.js.org/guides/development/#using-source-maps
  //devtool: 'source-map',
  devtool: 'inline-source-map',
  // https://webpack.js.org/guides/development/#using-webpack-dev-server
  devServer: {
    // static: './dist',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new HtmlMinimizerPlugin({
        minimizerOptions: {
          caseSensitive: true, 
          collapseWhitespace: true, 
          conservativeCollapse: true, 
          keepClosingSlash: true, 
          minifyCSS: false, 
          minifyJS: false, 
          removeComments: true, 
          removeScriptTypeAttributes: true, 
          removeStyleLinkTypeAttributes: true,
        },
      }),
    ],
  },
  // https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        // Config in .browserslistrc file
        browserslist: [
          '> 0.25%, not dead'
        ]
      }
    }),
    new Webpack.HotModuleReplacementPlugin(),
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
      // Type \ Default \ Description
      title: 'webpack-build', // type: String; default: 'Webpack App';  The title to use for the generated HTML document.
      template: path.resolve(__dirname, 'src', 'html', 'index.html'), // String||Function; The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html). The [name] placeholder will be replaced with the entry name. Can also be a function e.g. (entryName) => entryName + '.html'.
      filename: 'index.html',
      //
      //chunksSortMode: auto, // {String|Function} / auto / Allows to control how chunks should be sorted before they are included to the HTML. Allowed values are 'none' | 'auto' | 'manual' | {Function}
      //excludeChunks: // {Array.<string>} / `` / Allows you to skip some chunks (e.g don't add the unit-test chunk).
      //xhtml: false, // Boolean / false / If true render the link tags as self-closing (XHTML compliant).
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css' // change this RELATIVE to your output.path!
    }),
    //new postcssPresetEnv({}),
    new BundleAnalyzerPlugin({
      /* Webpack plugin and CLI utility that represents bundle content as
      convenient interactive zoomable treemap */
      analyzerMode: 'static'
      /*
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
      logLevel: */
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // Loading CSS
        // https://webpack.js.org/guides/asset-management/#loading-css
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.styl$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'stylus-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
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
  resolve: {
    extensions: ['*', '.js'],
  }
};