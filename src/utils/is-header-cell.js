import and from 'ramda/src/and'
import equals from 'ramda/src/equals'
import or from 'ramda/src/or'

export default (scope, idx) =>
  or(equals(scope, 'col'), and(equals(scope, 'row'), equals(idx, 0)))
