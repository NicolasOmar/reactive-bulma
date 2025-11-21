import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { LevelHeaderProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseTestId } from '@functions/parsers'

const LevelHeader: React.FC<LevelHeaderProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  header,
  value
}) => {
  const levelHeaderTestId =
    testId ??
    parseTestId({ tag: 'level-header', parsedClasses: cssClasses ?? '' })

  return (
    <section
      data-testid={levelHeaderTestId}
      className={cssClasses ?? undefined}
      style={style ?? undefined}
    >
      <p className='heading'>{header}</p>
      <p className='title'>{value}</p>
    </section>
  )
}

export default LevelHeader
