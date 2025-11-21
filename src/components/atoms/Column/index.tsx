import React from 'react'
// TYPES & INTERFACES
import { ColumnProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Column: React.FC<ColumnProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children = null,
  size = null,
  offset = null,
  isNarrow = false
}) => {
  const columnBaseClass = 'column'
  const columnClasses = parseClasses([
    columnBaseClass,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    offset ? `${COMMON_CLASSES.OFFSET}${offset}` : null,
    isNarrow ? `${COMMON_CLASSES.NARROW}` : null,
    cssClasses
  ])
  const columnTestId =
    testId ??
    parseTestId({ tag: columnBaseClass, parsedClasses: columnClasses })

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
