const debug = process.env.NODE_ENV !== 'production'
const withMDX = require('@zeit/next-mdx')({ options: {} })

module.exports = withMDX({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: !debug ? '/silky-react-table/' : '',
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })

    return config
  },
})
