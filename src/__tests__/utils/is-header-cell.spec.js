import isHeaderCell from '../../utils/is-header-cell'

test('is column header cell', () => {
  expect(isHeaderCell('col', 0)).toBe(true)
})

test('is row header cell', () => {
  expect(isHeaderCell('row', 0)).toBe(true)
})

test('is not header cell', () => {
  expect(isHeaderCell('row', 2)).toBe(false)
})
