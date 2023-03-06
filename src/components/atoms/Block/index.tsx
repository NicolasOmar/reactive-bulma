import React from 'react'
import { BlockProps } from '../../../interfaces/atomProps'

const Block: React.FC<BlockProps> = ({
  testId = 'test-block',
  children = null
}) =>
  children ? (
    <section
      data-testid={testId}
      className='block'
    >
      {children}
    </section>
  ) : null

export default Block
