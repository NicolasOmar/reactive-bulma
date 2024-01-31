import React from 'react'
// COMPONENTS
import { TableCell, TableHeadCell } from '../../atoms'
// TYPES & INTERFACES
import { TableRowProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const TableRow: React.FC<TableRowProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  headCell = null,
  listOfCells,
  isSelected = false,
  onClick = null
}) => {
  const tableRowClasses = parseClasses([
    isSelected ? 'is-selected' : null,
    cssClasses
  ])
  const tableRowTestId =
    testId ?? parseTestId({ tag: 'table-row', parsedClasses: tableRowClasses })

  return (
    <tr
      data-testid={tableRowTestId}
      className={tableRowClasses}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    >
      {headCell ? <TableHeadCell {...headCell} /> : null}
      {listOfCells.map(_cellConfig => (
        <TableCell
          key={`table-row-${generateKey()}`}
          {..._cellConfig}
        />
      ))}
    </tr>
  )
}

export default TableRow
