import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { TableHeadCellProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const TableHeadCell: React.FC<TableHeadCellProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  color = null,
  content,
  onClick = null
}) => {
  const tableHeadCellClass = parseClasses([color, cssClasses])
  const tableHeadCellTestId =
    testId ??
    parseTestId({
      tag: 'table-head-cell',
      parsedClasses: tableHeadCellClass ?? ''
    })

  return (
    <th
      data-testid={tableHeadCellTestId}
      className={tableHeadCellClass ?? undefined}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    >
      {content}
    </th>
  )
}

export default TableHeadCell
