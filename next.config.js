const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: [
    "@kickup/pulse-style-tokens"
  ]
})