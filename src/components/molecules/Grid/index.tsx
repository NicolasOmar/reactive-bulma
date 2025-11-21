import React, { useMemo } from 'react'
// COMPONENTS
import { GridCell } from '@components/atoms'
// TYPES & INTERFACES
import { GridProps } from '@interfaces/moleculeProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
import { TEST_ID_REGEXP } from '@constants/regExp'
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
  const gridBaseClass = 'grid'
  const fixedGridBaseClass = 'fixed-grid'
  const itHasFixedGap = gap !== null || isFixed
  const gridClasses = parseClasses([
    gridBaseClass,
    gap === null || isFixed ? null : `${COMMON_CLASSES.GAP}${gap}`,
    itHasFixedGap || columnGap === null
      ? null
      : `${COMMON_CLASSES.COLUMN_GAP}${columnGap}`,
    itHasFixedGap || rowGap === null
      ? null
      : `${COMMON_CLASSES.ROW_GAP}${rowGap}`,
    isFixed || cellMinWidth === null
      ? null
      : `${COMMON_CLASSES.COL_MIN_WIDTH}${cellMinWidth}`,
    cssClasses
  ])
  const gridTestId =
    testId ??
    parseTestId({
      tag: gridBaseClass,
      parsedClasses: gridClasses
    })

  const memoizedGrid = useMemo(
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

  if (isFixed) {
    const autoColumnsValue =
      fixedColumnsCount === null && isAutoColumns
        ? COMMON_CLASSES.AUTO_COLUMNS_GRID
        : null
    const gridContainerClasses = parseClasses([
      fixedGridBaseClass,
      fixedColumnsCount
        ? `${COMMON_CLASSES.HAS}${fixedColumnsCount}-cols`
        : null,
      autoColumnsValue,
      containerCssClasses
    ])
    const fixedGridTestId =
      containerTestId ??
      parseTestId({
        tag: fixedGridBaseClass,
        parsedClasses: gridContainerClasses,
        rules: [
          {
            regExp: TEST_ID_REGEXP.FIXED_GRID,
            replacer: ''
          },
          {
            regExp: TEST_ID_REGEXP.IS_HAS,
            replacer: '-'
          }
        ]
      })

    return (
      <section
        data-testid={fixedGridTestId}
        className={gridContainerClasses}
        style={containerStyle ?? undefined}
      >
        {memoizedGrid}
      </section>
    )
  }

  return memoizedGrid
}

export default Grid
