import React from 'react'
import { shallow } from 'enzyme'
import Tbody from '../src/tbody'

const data = [[1, 2], [3, 4], [5, 6]]

test('is not instance of <Tbody />', () => {
  const wrapper = shallow(<Tbody bodyData={data} />)
  const inst = wrapper.instance()
  expect(inst).not.toBeInstanceOf(Tbody)
})

test('render a table body <tbody> HTML element', () => {
  const wrapper = shallow(<Tbody bodyData={data} />)
  expect(wrapper.type()).toEqual('tbody')
})

test('contains three table rows', () => {
  const wrapper = shallow(<Tbody bodyData={data} />)
  expect(wrapper.children().length).toBe(3)
})

test('each row contains a data row in its rowData prop', () => {
  const wrapper = shallow(<Tbody bodyData={data} />)
  const children = wrapper.children()
  data.map((row, idx) => expect(children.at(idx).props().rowData).toBe(row))
})

test('should pass the scope "row" to the Tr component', () => {
  const wrapper = shallow(<Tbody bodyData={data} rowHeader />)
  const children = wrapper.children()
  data.map((_, idx) => expect(children.at(idx).props().scope).toEqual('row'))
})
