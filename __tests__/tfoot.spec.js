import React from 'react'
import { shallow } from 'enzyme'
import Tfoot from '../src/tfoot'

const data = ['foo', 'bar']

test('is not instance of <Tfoot />', () => {
  const wrapper = shallow(<Tfoot footerData={data} />)
  const inst = wrapper.instance()
  expect(inst).not.toBeInstanceOf(Tfoot)
})

test('render a table body <tfoot> HTML element', () => {
  const wrapper = shallow(<Tfoot footerData={data} />)
  expect(wrapper.type()).toEqual('tfoot')
})

test('contains one table row <Tr /> React component', () => {
  const wrapper = shallow(<Tfoot footerData={data} />)
  const children = wrapper.children()
  expect(children.length).toBe(1)
  expect(children.at(0).text()).toBe('<Tr />')
})

test('contains one table row with data and no scope', () => {
  const wrapper = shallow(<Tfoot footerData={data} />)
  const row = wrapper.children().at(0)
  expect(row.props().rowData).toBe(data)
  expect(row.props().scope).toBe(undefined)
})

test('contains one table row with data and "row" scope', () => {
  const wrapper = shallow(<Tfoot footerData={data} rowHeader />)
  const row = wrapper.children().at(0)
  expect(row.props().rowData).toBe(data)
  expect(row.props().scope).toBe('row')
})
