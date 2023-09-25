import React from 'react'
// TYPES & INTERFACES
import { ColumnGroupProps } from '../../../interfaces/moleculeProps'
// COMPONENTS
import { Column } from '../../atoms'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

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
    gap === undefined ? 'is-3' : gap === null ? 'is-gapless' : gap,
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
      {Array.isArray(listOfColumns)
        ? listOfColumns.map((_columnItem, i) => (
            <Column
              key={`column-group-item-${i}`}
              {..._columnItem}
            />
          ))
        : null}
    </section>
  )
}

export default ColumnGroup
