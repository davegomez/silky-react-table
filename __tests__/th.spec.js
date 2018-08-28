import React from 'react'
import { shallow } from 'enzyme'
import Th from '../src/th'

test('is not instance of <Th />', () => {
  const wrapper = shallow(<Th headerData={''} />)
  const inst = wrapper.instance()
  expect(inst).not.toBeInstanceOf(Th)
})

test('render a table cell <th> HTML element', () => {
  const wrapper = shallow(<Th headerData={''} />)
  expect(wrapper.type()).toEqual('th')
})

test('contains the property scope set to "col"', () => {
  const wrapper = shallow(<Th headerData={''} scope={'col'} />)
  expect(wrapper.props().scope).toEqual('col')
})

test('contains the property scope set to "row"', () => {
  const wrapper = shallow(<Th headerData={''} scope={'row'} />)
  expect(wrapper.props().scope).toEqual('row')
})

test('render the provided data', () => {
  const wrapper = shallow(<Th headerData={'foo'} />)
  expect(wrapper.text()).toEqual('foo')
})
