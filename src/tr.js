import React from 'react'
import always from 'ramda/src/always'
import and from 'ramda/src/and'
import cond from 'ramda/src/cond'
import equals from 'ramda/src/equals'
import or from 'ramda/src/or'
import T from 'ramda/src/T'
import isHeaderCell from './utils/is-header-cell'
import Th from './Th'
import Td from './Td'

const Tr = ({ rowData, scope }) => (
  <tr>
    {rowData.map(
      (data, idx) =>
        isHeaderCell(scope, idx) ? (
          <Th key={idx} headerData={data} scope={scope} />
        ) : (
          <Td key={idx} cellData={data} />
        )
    )}
  </tr>
)

export default Tr
