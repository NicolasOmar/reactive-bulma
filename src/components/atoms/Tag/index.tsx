import React from 'react'
import { parseClasses, parseTestId } from '../../../functions/persers'
import { TagProps } from '../../../interfaces/atomProps'

const Tag: React.FC<TagProps> = ({
  text,
  testId = null,
  style = null,
  color = 'is-primary',
  size = 'is-medium'
}) => {
  const tagClasses = parseClasses(['tag', color, size])
  const _testId = testId ?? parseTestId('tag', tagClasses)

  return (
    <span
      data-testid={_testId}
      style={style || undefined}
      className={tagClasses}
    >
      {text}
    </span>
  )
}

export default Tag
