import React from 'react'
// TYPES & INTERFACES
import { TagProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Tag: React.FC<TagProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  text,
  withDelete = false,
  withAddon = false,
  addonText = null,
  color = null,
  isLight = null,
  isRounded = null,
  size = null,
  addonColor = null,
  onDeleteClick = null
}) => {
  const tagContainerClasses = parseClasses([
    'tags',
    'has-addons',
    size ? size.replace('is-', 'are-') : null,
    containerCssClasses
  ])
  const tagClasses = parseClasses([
    'tag',
    color,
    isLight && !withAddon ? 'is-light' : null,
    isRounded && !withAddon ? 'is-rounded' : null,
    size,
    cssClasses
  ])
  const tagAddonClasses = parseClasses(['tag', addonColor])
  const tagLabel = withAddon ? 'tags' : 'tag'
  const tagTestId =
    testId ??
    parseTestId({
      tag: tagLabel,
      parsedClasses: withAddon ? tagContainerClasses : tagClasses,
      separator: withAddon ? '-' : ''
    })
  const tagContainerTestId = containerTestId ?? `${tagTestId}-container`
  const tagDeleteTestId = `${tagTestId}-delete`

  return withAddon ? (
    <section
      data-testid={tagContainerTestId}
      style={containerStyle ?? undefined}
      className={tagContainerClasses}
    >
      <span
        data-testid={tagTestId}
        className={tagClasses}
      >
        {text}
      </span>
      {withDelete ? (
        <a
          data-testid={tagDeleteTestId}
          className='tag is-delete'
          title='delete'
          aria-hidden='true'
          onClick={onDeleteClick ?? undefined}
        ></a>
      ) : (
        <span className={tagAddonClasses}>{addonText}</span>
      )}
    </section>
  ) : (
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
