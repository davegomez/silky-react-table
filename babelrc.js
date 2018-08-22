const env = require('./env-config')

module.exports = {
  presets: ['env', 'react', 'next/babel'],
  plugins: [['transform-define', env]],
}
