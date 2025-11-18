import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { ColumnGroupProps } from '@interfaces/moleculeProps'
import { ColumnGapType } from '@customTypes/styleTypes'
// COMPONENTS
import { Column } from '@components/atoms'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const parseGapCssClass = (gapPropValue: ColumnGapType | null | undefined) => {
  switch (gapPropValue) {
    case null:
      return 'is-gapless'
    case undefined:
      return 'is-3'
    default:
      return gapPropValue
  }
}

const ColumnGroup: React.FC<ColumnGroupProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  listOfColumns,
  isMobileLayout = null,
  isMultiline = null,
  isVerticallyCentered = null,
  isHorizontallyCentered = null,
  gap = undefined
}) => {
  const columnGapValue = parseGapCssClass(gap)
  const columnGroupClasses = parseClasses([
    'columns',
    isMultiline ? 'is-multiline' : null,
    isMobileLayout ? 'is-mobile' : null,
    isVerticallyCentered ? 'is-vcentered' : null,
    isHorizontallyCentered ? 'is-centered' : null,
    columnGapValue,
    cssClasses
  ])
  const columnGroupTestId =
    testId ??
    parseTestId({
      tag: 'columns',
      parsedClasses: columnGroupClasses
    })

  const memoizedColumnsInGroup = useMemo(
    () =>
      listOfColumns.map(columnItemConfig => (
        <Column
          key={`column-group-item-${generateKey()}`}
          {...columnItemConfig}
        />
      )),
    [listOfColumns]
  )

  return (
    <section
      data-testid={columnGroupTestId}
      className={columnGroupClasses}
      style={style ?? undefined}
    >
      {memoizedColumnsInGroup}
    </section>
  )
}

export default ColumnGroup
