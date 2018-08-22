import React from 'react'
import identity from 'ramda/src/identity'

const Th = ({ headerData, scope }) => (
  <th scope={scope}>{headerData}</th>
)

export default Th
