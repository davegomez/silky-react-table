import React from 'react'
import Tr from './Tr'

const Thead = ({ headerData }) => (
  <thead>
    <Tr rowData={headerData} scope={'col'} />
  </thead>
)

export default Thead
