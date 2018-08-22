import React from 'react'
import { shallow } from 'enzyme'
import Tr from '../tr'

const data = ['foo', 'bar']

test('is not instance of <Tr />', () => {
  const wrapper = shallow(<Tr rowData={data} />)
  const inst = wrapper.instance()
  expect(inst).not.toBeInstanceOf(Tr)
})

test('constains two table cell <Td /> React component', () => {
  const wrapper = shallow(<Tr rowData={data} />)
  const children = wrapper.children()
  expect(children.length).toBe(2)
  data.map((_, idx) => {
    expect(children.at(idx).text()).toBe('<Td />')
  })
})

test('should pass the corresponding data to each table cell', () => {
  const wrapper = shallow(<Tr rowData={data} />)
  const children = wrapper.children()
  data.map((item, idx) => {
    expect(children.at(idx).props().cellData).toBe(item)
  })
})

test('constains one table row header <Th /> React component', () => {
  const wrapper = shallow(<Tr rowData={data} scope={'row'} />)
  const children = wrapper.children()
  expect(children.length).toBe(2)
  expect(children.at(0).text()).toBe('<Th />')
  expect(children.at(1).text()).toBe('<Td />')
})
