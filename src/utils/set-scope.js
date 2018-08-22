import always from 'ramda/src/always'
import equals from 'ramda/src/equals'
import when from 'ramda/src/when'

export default scope => when(equals(true), always(scope))
