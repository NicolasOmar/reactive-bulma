import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { GridCellProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const GridCell: React.FC<GridCellProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children = null,
  position = null,
  colStart = null,
  rowStart = null,
  colStartFromEnd = null,
  rowStartFromEnd = null,
  colSpan = null,
  rowSpan = null
}) => {
  const gridCellClasses = parseClasses([
    'cell',
    position ? `${COMMON_CLASSES.IS}${position}` : null,
    colStart ? `is-col-start-${colStart}` : null,
    rowStart ? `is-row-start-${rowStart}` : null,
    colStartFromEnd ? `is-col-from-end-${colStartFromEnd}` : null,
    rowStartFromEnd ? `is-row-from-end-${rowStartFromEnd}` : null,
    colSpan ? `is-col-span-${colSpan}` : null,
    rowSpan ? `is-row-span-${rowSpan}` : null,
    cssClasses
  ])
  const gridCellTestId =
    testId ?? parseTestId({ tag: 'cell', parsedClasses: gridCellClasses })

  return (
    <section
      data-testid={gridCellTestId}
      className={gridCellClasses}
      style={style ?? undefined}
    >
      {children}
    </section>
  )
}

export default GridCell
