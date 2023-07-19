import React from 'react'
// TYPES & INTERFACES
import { BoxProps } from '../../../interfaces/atomProps'

const Box: React.FC<BoxProps> = ({
  testId = 'test-box',
  style = null,
  cssClasses = null,
  children = null
}) =>
  children ? (
    <section
      data-testid={testId}
      className={cssClasses ?? 'box'}
      style={style ?? undefined}
    >
      {children}
    </section>
  ) : null

export default Box
