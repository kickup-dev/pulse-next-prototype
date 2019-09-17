const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

const sassConfig = {
  webpack(config, {}) {
    config.module.rules.push({
      test: /\.(css|svg|eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        }
      ]
    });
    return config
  }
}

const cssConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
};

const transpileConfig = {
  transpileModules: [
    "@kickup/pulse-style-tokens",
    "@fort-awesome/fontawesome-pro"
  ]
}

const nextConfig = {
  webpack (config) {
    config.resolve.alias['ComponentLibrary'] = path.join(__dirname, 'componentLibrary');
    return config;
  }
}

module.exports = withPlugins([
  [ withCSS, cssConfig ],
  [ withTM, transpileConfig ]
], nextConfig);