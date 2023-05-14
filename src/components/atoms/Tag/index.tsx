import React from 'react'
// TYPES & INTERFACES
import { TagProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Tag: React.FC<TagProps> = ({
  text,
  testId = null,
  style = null,
  color = null,
  isLight = null,
  isRounded = null,
  size = null,
  withDelete = false,
  withAddon = false,
  addonText = null,
  addonColor = null,
  onDeleteClick = null
}) => {
  const tagLabel = withAddon ? 'tags' : 'tag'
  const tagClasses = parseClasses([
    'tag',
    color,
    isLight && !withAddon ? 'is-light' : null,
    isRounded && !withAddon ? 'is-rounded' : null,
    size
  ])
  const tagsWrapperClasses = parseClasses([
    'tags',
    'has-addons',
    size ? size.replace('is-', 'are-') : null
  ])
  const addonTagClasses = parseClasses(['tag', addonColor])
  const _testId =
    testId ??
    parseTestId({
      tag: tagLabel,
      parsedClasses: withAddon ? tagsWrapperClasses : tagClasses,
      separator: withAddon ? '-' : ''
    })

  return withAddon ? (
    <section
      data-testid={_testId}
      style={style ?? undefined}
      className={tagsWrapperClasses}
    >
      <span className={tagClasses}>{text}</span>
      {withDelete ? (
        <a
          data-testid={`${_testId}-delete`}
          className='tag is-delete'
          onClick={onDeleteClick || undefined}
        ></a>
      ) : (
        <span className={addonTagClasses}>{addonText}</span>
      )}
    </section>
  ) : (
    <span
      data-testid={_testId}
      style={style ?? undefined}
      className={tagClasses}
    >
      {text}
      {withDelete ? (
        <button
          data-testid={`${_testId}-delete`}
          className='delete'
          onClick={onDeleteClick || undefined}
        />
      ) : null}
    </span>
  )
}

export default Tag
