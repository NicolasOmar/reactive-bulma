import React from 'react'
// COMPONENTS
import { TableHeadCell } from '../../atoms'
import { TableRow } from '../../molecules'
// TYPES & INTERFACES
import { TableProps } from '../../../interfaces/organismProps'
import { TableHeadCellProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const renderTableSection = (
  sectionName: 'head' | 'foot',
  configData: TableHeadCellProps[]
) => (
  <tr>
    {configData.map(_ItemConfig => (
      <TableHeadCell
        key={`table-${sectionName}-item-${generateKey()}`}
        {..._ItemConfig}
      />
    ))}
  </tr>
)

const Table: React.FC<TableProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  head,
  body,
  foot = null,
  isBordered = false,
  isStriped = false,
  isNarrow = false,
  isHoverable = false,
  isFullwidth = false,
  isContained = false
}) => {
  const tableClasses = parseClasses([
    'table',
    isBordered ? 'is-bordered' : null,
    isStriped ? 'is-striped' : null,
    isNarrow ? 'is-narrow' : null,
    isHoverable ? 'is-hoverable' : null,
    isFullwidth ? 'is-fullwidth' : null,
    cssClasses
  ])
  const tableTestId =
    testId ?? parseTestId({ tag: 'table', parsedClasses: tableClasses })

  const TableElement = () => (
    <table
      data-testid={tableTestId}
      className={tableClasses}
      style={style ?? undefined}
    >
      <thead data-testid={`${tableTestId}-head`}>
        {renderTableSection('head', head)}
      </thead>
      <tbody data-testid={`${tableTestId}-body`}>
        {body.map(_bodyRowConfig => (
          <TableRow
            key={`table-body-item-${generateKey()}`}
            {..._bodyRowConfig}
          />
        ))}
      </tbody>
      {foot ? (
        <tfoot data-testid={`${tableTestId}-foot`}>
          {renderTableSection('foot', foot)}
        </tfoot>
      ) : null}
    </table>
  )

  return isContained ? (
    <section
      data-testid={`${tableTestId}-container`}
      className='table-container'
    >
      {<TableElement />}
    </section>
  ) : (
    <TableElement />
  )
}

export default Table
