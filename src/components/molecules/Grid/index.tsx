import React, { useMemo } from 'react'
// COMPONENTS
import { GridCell } from '@components/atoms'
// TYPES & INTERFACES
import { GridProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const Grid: React.FC<GridProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  listOfCells,
  gap = null,
  columnGap = null,
  rowGap = null,
  cellMinWidth = null
}) => {
  const gridClasses = parseClasses([
    'grid',
    gap,
    gap ? null : columnGap,
    gap ? null : rowGap,
    cellMinWidth,
    cssClasses
  ])
  const gridTestId =
    testId ?? parseTestId({ tag: 'grid', parsedClasses: gridClasses })

  const memoizedCellsInGrid = useMemo(
    () =>
      listOfCells.map(_cellConfig => (
        <GridCell
          key={`grid-cell-${generateKey()}`}
          {..._cellConfig}
        />
      )),
    [listOfCells]
  )

  return (
    <section
      data-testid={gridTestId}
      className={gridClasses}
      style={style ?? undefined}
    >
      {memoizedCellsInGrid}
    </section>
  )
}

export default Grid
