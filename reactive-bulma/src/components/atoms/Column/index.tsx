import React from 'react'
// TYPES & INTERFACES
import { ColumnProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Column: React.FC<ColumnProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children = null,
  size = null,
  offset = null,
  isNarrow = false
}) => {
  const columnClasses = parseClasses([
    'column',
    size,
    offset,
    isNarrow ? 'is-narrow' : null,
    cssClasses
  ])
  const columnTestId =
    testId ?? parseTestId({ tag: 'column', parsedClasses: columnClasses })

  return (
    <section
      data-testid={columnTestId}
      className={columnClasses}
      style={style ?? undefined}
    >
      {children}
    </section>
  )
}

export default Column
