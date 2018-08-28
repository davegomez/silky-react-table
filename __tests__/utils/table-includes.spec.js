import {
  includesHead,
  includesFoot,
  includesHeadAndFoot,
} from '../../src/utils/table-includes'

test('the table includes a header', () => {
  const options = { header: true, footer: false }
  expect(includesHead(options)).toBe(true)
})

test('the table does not includes a header', () => {
  const options = { header: false, footer: false }
  expect(includesHead(options)).toBe(false)
})

test('the table includes a footer', () => {
  const options = { header: false, footer: true }
  expect(includesFoot(options)).toBe(true)
})

test('the table does not includes a footer', () => {
  const options = { header: false, footer: false }
  expect(includesFoot(options)).toBe(false)
})

test('the table includes a header and a footer', () => {
  const options = { header: true, footer: true }
  expect(includesHeadAndFoot(options)).toBe(true)
})

test('the table does not includes a header and a footer, only a header', () => {
  const options = { header: true, footer: false }
  expect(includesHeadAndFoot(options)).toBe(false)
})

test('the table does not includes a header and a footer, only a footer', () => {
  const options = { header: false, footer: true }
  expect(includesHeadAndFoot(options)).toBe(false)
})
