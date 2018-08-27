import getOptions from '../../utils/get-options'
import sortData from '../../utils/sort-data'
import defaults from '../../defaults'

const data = [[2, 'qux', 4], [1, 'foo', 6], [3, 'bar', 5]]
const datesData = [
  ['Fri Mar 24 2017 03:28:00 GMT-0400 (Eastern Daylight Time)'],
  ['Tue Jul 11 2017 17:56:00 GMT-0400 (Eastern Daylight Time)'],
  ['Sun Jan 29 2017 10:12:00 GMT-0500 (Eastern Standard Time)'],
  ['Sat Dec 02 2017 05:32:00 GMT-0500 (Eastern Standard Time)'],
  ['Sun Sep 24 2017 21:48:00 GMT-0400 (Eastern Daylight Time)'],
]

test('sort ascending based on first item of each element by default', () => {
  const options = getOptions(defaults, {})
  expect(sortData(data, options)).toEqual([
    [1, 'foo', 6],
    [2, 'qux', 4],
    [3, 'bar', 5],
  ])
})

test('sort descending based on first item of each element by default', () => {
  const options = getOptions(defaults, { sortDescending: true })
  expect(sortData(data, options)).toEqual([
    [3, 'bar', 5],
    [2, 'qux', 4],
    [1, 'foo', 6],
  ])
})

test('string ascending sort based on second item of each element', () => {
  const options = getOptions(defaults, { sortByColumn: 1 })
  expect(sortData(data, options)).toEqual([
    [3, 'bar', 5],
    [1, 'foo', 6],
    [2, 'qux', 4],
  ])
})

test('string descending sort based on second item of each element', () => {
  const options = getOptions(defaults, {
    sortByColumn: 1,
    sortDescending: true,
  })
  expect(sortData(data, options)).toEqual([
    [2, 'qux', 4],
    [1, 'foo', 6],
    [3, 'bar', 5],
  ])
})

test('number ascending sort based on last item of each element', () => {
  const options = getOptions(defaults, { sortByColumn: 2 })
  expect(sortData(data, options)).toEqual([
    [2, 'qux', 4],
    [3, 'bar', 5],
    [1, 'foo', 6],
  ])
})

test('number descending sort based on last item of each element', () => {
  const options = getOptions(defaults, {
    sortByColumn: 2,
    sortDescending: true,
  })
  expect(sortData(data, options)).toEqual([
    [1, 'foo', 6],
    [3, 'bar', 5],
    [2, 'qux', 4],
  ])
})

test('dates ascending sort using a custom compare function', () => {
  const customSort = (a, b) => new Date(a).getTime() - new Date(b).getTime()
  const options = getOptions(defaults, {
    sorted: true,
    columnOptions: [{ sortAscFunction: customSort }],
  })

  console.log(options)

  expect(sortData(datesData, options)).toEqual([
    ['Sun Jan 29 2017 10:12:00 GMT-0500 (Eastern Standard Time)'],
    ['Fri Mar 24 2017 03:28:00 GMT-0400 (Eastern Daylight Time)'],
    ['Tue Jul 11 2017 17:56:00 GMT-0400 (Eastern Daylight Time)'],
    ['Sun Sep 24 2017 21:48:00 GMT-0400 (Eastern Daylight Time)'],
    ['Sat Dec 02 2017 05:32:00 GMT-0500 (Eastern Standard Time)'],
  ])
})

test('dates descending sort using a custom compare function', () => {
  const customSort = (a, b) => new Date(b).getTime() - new Date(a).getTime()
  const options = getOptions(defaults, {
    sorted: true,
    sortDescending: true,
    columnOptions: [{ sortDescFunction: customSort }],
  })
  expect(sortData(datesData, options)).toEqual([
    ['Sat Dec 02 2017 05:32:00 GMT-0500 (Eastern Standard Time)'],
    ['Sun Sep 24 2017 21:48:00 GMT-0400 (Eastern Daylight Time)'],
    ['Tue Jul 11 2017 17:56:00 GMT-0400 (Eastern Daylight Time)'],
    ['Fri Mar 24 2017 03:28:00 GMT-0400 (Eastern Daylight Time)'],
    ['Sun Jan 29 2017 10:12:00 GMT-0500 (Eastern Standard Time)'],
  ])
})
