import React from 'react'
import { parseClasses, parseTestId } from '../../../functions/persers'
import { TagProps } from '../../../interfaces/atomProps'

const Tag: React.FC<TagProps> = ({
  text,
  testId = null,
  style = null,
  color = 'is-primary',
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
    testId ?? parseTestId(tagLabel, withAddon ? tagsWrapperClasses : tagClasses)

  return withAddon ? (
    <section
      data-testid={_testId}
      style={style || undefined}
      className={tagsWrapperClasses}
    >
      <span className={tagClasses}>{text}</span>
      {withDelete ? (
        <a
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
      style={style || undefined}
      className={tagClasses}
    >
      {text}
      {withDelete ? (
        <button
          className='delete'
          onClick={onDeleteClick || undefined}
        />
      ) : null}
    </span>
  )
}

export default Tag
