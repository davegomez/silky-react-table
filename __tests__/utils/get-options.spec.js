import getOptions from '../../src/utils/get-options'

test('override defaults if they are defined in the second object', () => {
  const original = { foo: 'bar' }
  const provided = { foo: 'baz', bar: 'qux' }
  const expected = { foo: 'baz' }

  expect(getOptions(original, provided)).toEqual(expected)
})

test('remove null defaults if they are not defined in the second object', () => {
  const original = { foo: 'bar', bar: null }
  const provided = { foo: 'baz', baz: { foo: 'bar' } }
  const expected = { foo: 'baz' }

  expect(getOptions(original, provided)).toEqual(expected)
})

test('override null defaults if they are defined in the second object', () => {
  const original = { foo: 'bar', bar: null, baz: ['foo', 'bar'] }
  const provided = { foo: 'baz', bar: 'qux' }
  const expected = { foo: 'baz', bar: 'qux', baz: ['foo', 'bar'] }

  expect(getOptions(original, provided)).toEqual(expected)
})

test('', () => {
  const original = { foo: 'bar', bar: null, baz: 'qux' }
  const provided = { foo: 'baz', bar: ['foo', 'bar'] }
  const expected = { foo: 'baz', bar: ['foo', 'bar'], baz: 'qux' }

  expect(getOptions(original, provided)).toEqual(expected)
})
