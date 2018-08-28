import React from 'react'
import { shallow } from 'enzyme'
import Td from '../src/td'

test('is not instance of <Td />', () => {
  const wrapper = shallow(<Td cellData={''} />)
  const inst = wrapper.instance()
  expect(inst).not.toBeInstanceOf(Td)
})

test('render a table cell <td> HTML element', () => {
  const wrapper = shallow(<Td cellData={''} />)
  expect(wrapper.type()).toEqual('td')
})

test('render the provided data', () => {
  const wrapper = shallow(<Td cellData={'foo'} />)
  expect(wrapper.text()).toEqual('foo')
})

test('applies the transformer function', () => {
  const transformer = x => `${x} is false`
  const wrapper = shallow(<Td cellData={'true'} transformer={transformer} />)
  expect(wrapper.text()).toEqual('true is false')
})
