import checkColumnOptions from '../../src/utils/check-column-options'

test('returns false if any parameter is empty', () => {
  expect(checkColumnOptions([], ['foo'])).toBe(false)
  expect(checkColumnOptions(['foo'], [])).toBe(false)
})

test('returns false if any parameter have different lenght', () => {
  expect(checkColumnOptions(['foo', 'bar'], ['foo'])).toBe(false)
  expect(checkColumnOptions(['foo'], ['foo', 'bar'])).toBe(false)
})

test('returns the second parameter if both have content and the same length', () => {
  const dataRow = ['foo', 'bar']
  const options = ['baz', 'qux']
  expect(checkColumnOptions(dataRow, options)).toBe(options)
})
