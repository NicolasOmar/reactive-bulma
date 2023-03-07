import React from 'react'
import { parseClasses, parseTestId } from '../../../functions/persers'
import { TagProps } from '../../../interfaces/atomProps'

const Tag: React.FC<TagProps> = ({
  text,
  style = null,
  color = 'is-primary',
  size = 'is-medium'
}) => {
  const tagClasses = parseClasses(['tag', color, size])
  const parsedTestId = parseTestId('tag', tagClasses)
  return (
    <span
      data-testid={parsedTestId}
      style={style || undefined}
      className={tagClasses}
    >
      {text}
    </span>
  )
}

export default Tag
