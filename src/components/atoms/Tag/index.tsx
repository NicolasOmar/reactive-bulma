import React from 'react'
// TYPES & INTERFACES
import { TagProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// CONSTANTS
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Tag: React.FC<TagProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  text,
  withDelete = false,
  color = null,
  isLight = null,
  isRounded = null,
  size = null,
  onDeleteClick = null
}) => {
  const tagBaseClass = 'tag'
  const tagClasses = parseClasses([
    tagBaseClass,
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    isLight ? COMMON_CLASSES.LIGHT : null,
    isRounded ? COMMON_CLASSES.ROUNDED : null,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    cssClasses
  ])
  const tagTestId =
    testId ??
    parseTestId({
      tag: tagBaseClass,
      parsedClasses: tagClasses,
      rules: [
        { regExp: TEST_ID_REGEXP.TAG, replacer: '' },
        { regExp: TEST_ID_REGEXP.IS, replacer: '-' }
      ]
    })
  const tagDeleteTestId = `${tagTestId}-delete`

  return (
    <span
      data-testid={tagTestId}
      style={style ?? undefined}
      className={tagClasses}
    >
      {text}
      {withDelete ? (
        <button
          data-testid={tagDeleteTestId}
          className='delete'
          onClick={onDeleteClick ?? undefined}
        />
      ) : null}
    </span>
  )
}

export default Tag
