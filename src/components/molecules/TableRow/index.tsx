import React, { useMemo } from 'react'
// COMPONENTS
import { TableCell, TableHeadCell } from '@components/atoms'
// TYPES & INTERFACES
import { TableRowProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const TableRow: React.FC<TableRowProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  color = null,
  headCell = null,
  listOfCells,
  isSelected = false,
  onClick = null
}) => {
  const tableRowClasses = parseClasses([
    isSelected ? 'is-selected' : null,
    color,
    cssClasses
  ])
  const tableRowTestId =
    testId ?? parseTestId({ tag: 'table-row', parsedClasses: tableRowClasses })

  const memoizedCell = useMemo(
    () => (headCell ? <TableHeadCell {...headCell} /> : null),
    [headCell]
  )

  const memoizedTableCells = useMemo(
    () =>
      listOfCells.map(_cellConfig => (
        <TableCell
          key={`table-row-${generateKey()}`}
          {..._cellConfig}
        />
      )),
    [listOfCells]
  )

  return (
    <tr
      data-testid={tableRowTestId}
      className={tableRowClasses}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    >
      {memoizedCell}
      {memoizedTableCells}
    </tr>
  )
}

export default TableRow
