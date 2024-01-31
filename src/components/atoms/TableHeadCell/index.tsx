import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { TableHeadCellProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseTestId } from '../../../functions/parsers'

const TableHeadCell: React.FC<TableHeadCellProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  content,
  onClick = null
}) => {
  const tableHeadCellTestId =
    testId ??
    parseTestId({ tag: 'table-head-cell', parsedClasses: cssClasses ?? '' })

  return (
    <th
      data-testid={tableHeadCellTestId}
      className={cssClasses ?? undefined}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    >
      {content}
    </th>
  )
}

export default TableHeadCell
