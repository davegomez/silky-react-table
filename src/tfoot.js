import React from 'react'
import setScope from './utils/set-scope'
import Tr from './Tr'

const setScopeRow = setScope('row')

const Tfoot = ({ footerData, rowHeader }) => (
  <tfoot>
    <Tr rowData={footerData} footer scope={setScopeRow(rowHeader)} />
  </tfoot>
)

export default Tfoot
