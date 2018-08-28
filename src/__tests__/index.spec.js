import React from 'react'
import { shallow } from 'enzyme'
import Table from '../index'
import Thead from '../thead'
import Tbody from '../tbody'
import defaults from '../defaults'
import getOptions from '../utils/get-options'

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const tableOptions = getOptions(defaults)

test('is not instance of <Table />', () => {
  const wrapper = shallow(<Table tableData={data} options={tableOptions({})} />)
  const inst = wrapper.instance()
  expect(inst).not.toBeInstanceOf(Table)
})

test('render a table HTML element', () => {
  const wrapper = shallow(<Table tableData={data} options={tableOptions({})} />)
  expect(wrapper.name()).toBe('table')
})

test('has class "silky-react-table"', () => {
  const wrapper = shallow(<Table tableData={data} options={tableOptions({})} />)
  expect(wrapper.hasClass('silky-react-table')).toBe(true)
})

test('constains one table body <Tbody /> React component', () => {
  const wrapper = shallow(<Table tableData={data} options={tableOptions({})} />)
  expect(
    wrapper
      .children()
      .at(0)
      .text()
  ).toBe('<Tbody />')
})

test('should pass the table data to <Tbody /> React component', () => {
  const wrapper = shallow(<Table tableData={data} options={tableOptions({})} />)
  expect(
    wrapper
      .children()
      .at(0)
      .props().bodyData
  ).toBe(data)
})

test('should render a <Caption> React component', () => {
  const wrapper = shallow(
    <Table tableData={data} options={tableOptions({})} caption={'foo'} />
  )
  expect(wrapper.children().length).toBe(2)
  expect(
    wrapper
      .children()
      .at(0)
      .text()
  ).toEqual('<Caption />')
  expect(
    wrapper
      .children()
      .at(0)
      .props().caption
  ).toEqual('foo')
})

test('should render a <Thead /> React component and pass the first row of data', () => {
  const wrapper = shallow(
    <Table tableData={data} options={tableOptions({ header: true })} />
  )
  expect(wrapper.find(Thead).props().headerData).toBe(data[0])
})

test('should render a <Tbody /> React component and pass all but the first row of data', () => {
  const wrapper = shallow(
    <Table tableData={data} options={tableOptions({ header: true })} />
  )
  expect(wrapper.find(Tbody).props().bodyData).toEqual(data.slice(1))
})

test('pass the rowHeader option to <Tbody /> React component', () => {
  const wrapper = shallow(
    <Table tableData={data} options={tableOptions({ rowHeader: true })} />
  )
  expect(wrapper.find(Tbody).props().rowHeader).toBe(true)
})
