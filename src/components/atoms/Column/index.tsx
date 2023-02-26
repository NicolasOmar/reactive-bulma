import React from 'react'
// PROPS
import { ColumnProps } from '../../../interfaces/atomProps'

const Column: React.FC<ColumnProps> = ({
  size = null,
  offset = null,
  isNarrow = false,
  children = null
}) => {
  const classes = ['column', size, offset, isNarrow ? 'is-narrow' : null]
    .filter(_class => _class)
    .join(' ')
  return (
    <section
      data-testid='test-column'
      className={classes}
    >
      {children}
    </section>
  )
}

export default Column
