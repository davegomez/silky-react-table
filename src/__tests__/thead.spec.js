import React from 'react'
import { shallow } from 'enzyme'
import Thead from '../thead'

const data = ['foo', 'bar']

test('is not instance of <Thead />', () => {
  const wrapper = shallow(<Thead headerData={data} />)
  const inst = wrapper.instance()
  expect(inst).not.toBeInstanceOf(Thead)
})

test('render a table body <thead> HTML element', () => {
  const wrapper = shallow(<Thead headerData={data} />)
  expect(wrapper.type()).toEqual('thead')
})

test('contains one table row <Tr /> React component', () => {
  const wrapper = shallow(<Thead headerData={data} />)
  const children = wrapper.children()
  expect(children.length).toBe(1)
  expect(children.at(0).text()).toBe('<Tr />')
})

test('contains one table row', () => {
  const wrapper = shallow(<Thead headerData={data} />)
  expect(wrapper.children().length).toBe(1)
})

test('contains one table row with data and "col" scope', () => {
  const wrapper = shallow(<Thead headerData={data} />)
  const row = wrapper.children().at(0)
  expect(row.props().rowData).toBe(data)
  expect(row.props().scope).toBe('col')
})
