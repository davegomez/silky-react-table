import React from 'react'
import identity from 'ramda/src/identity'

const Td = ({ cellData, transformer = identity }) => (
  <td>{transformer(cellData)}</td>
)

export default Td
