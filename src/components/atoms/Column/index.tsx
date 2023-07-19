import React from 'react'
// TYPES & INTERFACES
import { ColumnProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Column: React.FC<ColumnProps> = ({
  testId = null,
  style = null,
  cssClasses = null,
  size = null,
  offset = null,
  isNarrow = false,
  children = null
}) => {
  const columnClasses = parseClasses([
    'column',
    size,
    offset,
    isNarrow ? 'is-narrow' : null,
    cssClasses
  ])
  const _testId =
    testId ?? parseTestId({ tag: 'column', parsedClasses: columnClasses })

  return (
    <section
      data-testid={_testId}
      className={columnClasses}
      style={style ?? undefined}
    >
      {children}
    </section>
  )
}

export default Column
