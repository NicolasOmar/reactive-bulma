import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { GridCellProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const GridCell: React.FC<GridCellProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children = null
}) => {
  const gridCellClasses = parseClasses(['cell', cssClasses])
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
