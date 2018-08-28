import curry from 'ramda/src/curry'
import defaultTo from 'ramda/src/defaultTo'
import isNil from 'ramda/src/isNil'

const getOptions = curry((a, b) =>
  Object.keys(a).reduce((acc, key) => {
    acc[key] = isNil(a[key]) ? b[key] : defaultTo(a[key], b[key])
    return acc
  }, {})
)

export default getOptions
