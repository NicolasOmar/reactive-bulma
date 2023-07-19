import React from 'react'
// TYPES & INTERFACES
import { BoxProps } from '../../../interfaces/atomProps'

const Box: React.FC<BoxProps> = ({
  testId = 'test-box',
  style = null,
  cssClasses = 'box',
  children = null
}) =>
  children ? (
    <section
      data-testid={testId}
      className={cssClasses}
      style={style ?? undefined}
    >
      {children}
    </section>
  ) : null

export default Box
