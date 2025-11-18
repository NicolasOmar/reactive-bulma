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
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  listOfCells,
  gap = null,
  columnGap = null,
  rowGap = null,
  cellMinWidth = null,
  isFixed = false,
  fixedColumnsCount = null,
  isAutoColumns = false
}) => {
  const gridClasses = parseClasses([
    'grid',
    isFixed ? null : gap,
    gap || isFixed ? null : columnGap,
    gap || isFixed ? null : rowGap,
    isFixed ? null : cellMinWidth,
    cssClasses
  ])
  const gridTestId =
    testId ??
    parseTestId({
      tag: 'grid',
      parsedClasses: gridClasses
    })
  const autoColumnsValue =
    fixedColumnsCount === null && isAutoColumns ? 'has-auto-count' : null
  const gridContainerClasses = isFixed
    ? parseClasses([
        'fixed-grid',
        fixedColumnsCount,
        autoColumnsValue,
        containerCssClasses
      ])
    : undefined
  const fixedGridTestId = isFixed
    ? (containerTestId ??
      parseTestId({
        tag: 'fixed-grid',
        parsedClasses: gridContainerClasses ?? '',
        rules: [
          {
            regExp: /fixed-grid/gm,
            replacer: ''
          },
          {
            regExp: /is-|has-/gm,
            replacer: '-'
          }
        ]
      }))
    : undefined

  const memoizedCellsInGrid = useMemo(
    () => (
      <section
        data-testid={gridTestId}
        className={gridClasses}
        style={style ?? undefined}
      >
        {listOfCells.map(_cellConfig => (
          <GridCell
            key={`grid-cell-${generateKey()}`}
            {..._cellConfig}
          />
        ))}
      </section>
    ),
    [gridTestId, gridClasses, style, listOfCells]
  )

  return isFixed ? (
    <section
      data-testid={fixedGridTestId}
      className={gridContainerClasses}
      style={containerStyle ?? undefined}
    >
      {memoizedCellsInGrid}
    </section>
  ) : (
    memoizedCellsInGrid
  )
}

export default Grid
