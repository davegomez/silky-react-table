import React, { Fragment } from 'react'
import always from 'ramda/src/always'
import compose from 'ramda/src/compose'
import cond from 'ramda/src/cond'
import head from 'ramda/src/head'
import init from 'ramda/src/init'
import last from 'ramda/src/last'
import merge from 'ramda/src/merge'
import or from 'ramda/src/or'
import T from 'ramda/src/T'
import tail from 'ramda/src/tail'
import defaults from './defaults'
import checkOptions from './utils/check-options'
import {
  includesHeadAndFoot,
  includesHead,
  includesFoot,
} from './utils/table-includes'
import sortData from './utils/sort-data'
import Caption from './caption'
import Thead from './thead'
import Tbody from './tbody'
import Tfoot from './Tfoot'

const getDataBody = compose(
  tail,
  init
)

export default ({ caption, options, tableData }) => {
  const tableOptions = merge(defaults, options)
  const { columnOptions, rowHeader, sortByColumn, sorted } = tableOptions
  const validColumnOptions = checkOptions(head(tableData), columnOptions)

  return (
    <table className={'silky-react-table'}>
      {caption ? <Caption caption={caption} /> : null}
      {cond([
        [
          includesHeadAndFoot,
          always(
            <Fragment>
              <Thead
                headerData={head(tableData)}
                columnOptions={validColumnOptions}
              />
              <Tbody
                bodyData={
                  or(sorted, sortByColumn)
                    ? sortData(getDataBody(tableData), tableOptions)
                    : getDataBody(tableData)
                }
                columnOptions={validColumnOptions}
                rowHeader={rowHeader}
              />
              <Tfoot
                footerData={last(tableData)}
                columnOptions={validColumnOptions}
                rowHeader={rowHeader}
              />
            </Fragment>
          ),
        ],
        [
          includesHead,
          always(
            <Fragment>
              <Thead
                headerData={head(tableData)}
                columnOptions={validColumnOptions}
              />
              <Tbody
                bodyData={
                  or(sorted, sortByColumn)
                    ? sortData(tail(tableData), tableOptions)
                    : tail(tableData)
                }
                columnOptions={validColumnOptions}
                rowHeader={rowHeader}
              />
            </Fragment>
          ),
        ],
        [
          includesFoot,
          always(
            <Fragment>
              <Tbody
                bodyData={
                  or(sorted, sortByColumn)
                    ? sortData(init(tableData), tableOptions)
                    : init(tableData)
                }
                columnOptions={validColumnOptions}
                rowHeader={rowHeader}
              />
              <Tfoot
                footerData={last(tableData)}
                columnOptions={validColumnOptions}
                rowHeader={rowHeader}
              />
            </Fragment>
          ),
        ],
        [T, always(<Tbody bodyData={tableData} rowHeader={rowHeader} />)],
      ])(tableOptions)}
    </table>
  )
}
