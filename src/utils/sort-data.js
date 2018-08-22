import always from 'ramda/src/always'
import ascend from 'ramda/src/ascend'
import descend from 'ramda/src/descend'
import ifElse from 'ramda/src/ifElse'
import isNil from 'ramda/src/isNil'
import nth from 'ramda/src/nth'
import sort from 'ramda/src/sort'

const wrapCompare = fn1 => fn2 => (a, b) => fn1(fn2(a), fn2(b))
const getAscend = ifElse(isNil, always(ascend), wrapCompare)
const getDescend = ifElse(isNil, always(descend), wrapCompare)

export default (
  data,
  {
    sortDescending,
    customSortAsc: customAsc,
    customSortDesc: customDesc,
    sortByColumn: column = 0,
  }
) => {
  const ascending = getAscend(customAsc)
  const descending = getDescend(customDesc)

  return sort(
    ifElse(
      always(sortDescending),
      descending(nth(column)),
      ascending(nth(column))
    ),
    data
  )
}
