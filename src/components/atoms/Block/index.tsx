import React from 'react'
// TYPES & INTERFACES
import { BlockProps } from '../../../interfaces/atomProps'

const Block: React.FC<BlockProps> = ({
  testId = 'test-block',
  style = null,
  children = null
}) =>
  children ? (
    <section
      data-testid={testId}
      className='block'
      style={style ?? undefined}
    >
      {children}
    </section>
  ) : null

export default Block
