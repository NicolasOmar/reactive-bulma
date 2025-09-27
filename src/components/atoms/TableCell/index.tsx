import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { TableCellProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseTestId } from '@functions/parsers'

const TableCell: React.FC<TableCellProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  content,
  onClick = null
}) => {
  const tableCellTestId =
    testId ??
    parseTestId({ tag: 'table-cell', parsedClasses: cssClasses ?? '' })

  return (
    <td
      data-testid={tableCellTestId}
      className={cssClasses ?? undefined}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    >
      {content}
    </td>
  )
}

export default TableCell
