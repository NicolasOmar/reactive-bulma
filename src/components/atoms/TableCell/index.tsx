import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { TableCellProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const TableCell: React.FC<TableCellProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  color = null,
  content,
  onClick = null
}) => {
  const tableCellClass = parseClasses([
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    cssClasses
  ])
  const tableCellTestId =
    testId ?? parseTestId({ tag: 'table-cell', parsedClasses: tableCellClass })

  return (
    <td
      data-testid={tableCellTestId}
      className={tableCellClass}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    >
      {content}
    </td>
  )
}

export default TableCell
