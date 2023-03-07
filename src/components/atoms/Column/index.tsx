import React from 'react'
// PROPS
import { ColumnProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/persers'

const Column: React.FC<ColumnProps> = ({
  testId = null,
  style = null,
  size = null,
  offset = null,
  isNarrow = false,
  children = null
}) => {
  const columnClasses = parseClasses([
    'column',
    size,
    offset,
    isNarrow ? 'is-narrow' : null
  ])
  const _testId = testId ?? parseTestId('column', columnClasses)

  return (
    <section
      data-testid={_testId}
      className={columnClasses}
      style={style || undefined}
    >
      {children}
    </section>
  )
}

export default Column
