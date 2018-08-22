import checkOptions from '../../utils/check-options'

test('returns false if any parameter is empty', () => {
  expect(checkOptions([], ['foo'])).toBe(false)
  expect(checkOptions(['foo'], [])).toBe(false)
})

test('returns false if any parameter have different lenght', () => {
  expect(checkOptions(['foo', 'bar'], ['foo'])).toBe(false)
  expect(checkOptions(['foo'], ['foo', 'bar'])).toBe(false)
})

test('returns the second parameter if both have content and the same length', () => {
  const dataRow = ['foo', 'bar']
  const options = ['baz', 'qux']
  expect(checkOptions(dataRow, options)).toBe(options)
})
