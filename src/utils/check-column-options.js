const isValid = (sample, options) =>
  options && options.length > 0 && sample.length === options.length

/**
 * The columnOptions array may be undefined but if is defined it must have the
 * same length of the sample, being the sample the first row or header of the
 * provided data.
 *
 * @param {[object]} sample First row or header of the provided data.
 * @param {[object]} options columnOptions array defined in the talbe options.
 * @returns The options array or false if is not valid.
 */
const checkColumnOptions = (sample, options) =>
  isValid(sample, options) && options

export default checkColumnOptions
