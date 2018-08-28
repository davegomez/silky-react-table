import always from 'ramda/src/always'
import complement from 'ramda/src/complement'
import isNil from 'ramda/src/isNil'
import when from 'ramda/src/when'

const setScope = scope => when(complement(isNil), always(scope))

export default setScope
