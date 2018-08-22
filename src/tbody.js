import React from 'react'
import setScope from './utils/set-scope'
import Tr from './Tr'

const setScopeRow = setScope('row')

const Tbody = ({ bodyData, rowHeader: header }) => (
  <tbody>
    {bodyData.map((data, idx) => (
      <Tr key={idx} rowData={data} scope={setScopeRow(header)} />
    ))}
  </tbody>
)

export default Tbody
