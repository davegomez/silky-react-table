import React from 'react'
import { shallow } from 'enzyme'
import Caption from '../src/caption'

test('is not instance of <Caption />', () => {
  const wrapper = shallow(<Caption caption={''} />)
  const inst = wrapper.instance()
  expect(inst).not.toBeInstanceOf(Caption)
})

test('contains one HTML node element', () => {
  const wrapper = shallow(<Caption caption={''} />)
  expect(wrapper.length).toBe(1)
})

test('contains the caption text', () => {
  const wrapper = shallow(<Caption caption={'foo'} />)
  expect(wrapper.text()).toEqual('foo')
})
