import React from 'react'
// TYPES & INTERFACES
import { ColumnGroupProps } from '../../../interfaces/moleculeProps'
import { columnGapType } from '../../../types/styleTypes'
// COMPONENTS
import { Column } from '../../atoms'
// PARSERS
import { parseClasses, parseKey, parseTestId } from '../../../functions/parsers'

const parseGapCssClass = (gapPropValue: columnGapType | null | undefined) => {
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
  const columnGroupClasses = parseClasses([
    'columns',
    isMultiline ? 'is-multiline' : null,
    isMobileLayout ? 'is-mobile' : null,
    isVerticallyCentered ? 'is-vcentered' : null,
    isHorizontallyCentered ? 'is-centered' : null,
    parseGapCssClass(gap),
    cssClasses
  ])
  const columnGroupTestId =
    testId ??
    parseTestId({
      tag: 'columns',
      parsedClasses: columnGroupClasses
    })
  return (
    <section
      data-testid={columnGroupTestId}
      className={columnGroupClasses}
      style={style ?? undefined}
    >
      {listOfColumns.map(columnItemConfig => (
        <Column
          key={`column-group-item-${parseKey()}`}
          {...columnItemConfig}
        />
      ))}
    </section>
  )
}

export default ColumnGroup
