import curry from 'ramda/src/curry'

const getOptions = curry((a, b) =>
  Object.keys(a).reduce((acc, key) => {
    acc[key] = a[key] ? b[key] || a[key] : b[key]
    return acc
  }, {})
)

export default getOptions
