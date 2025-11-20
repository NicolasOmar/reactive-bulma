import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { TagProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

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
  const tagBaseClass = 'tag'
  const tagsBaseClass = 'tags'
  const tagContainerClasses = useMemo(
    () =>
      parseClasses([
        tagsBaseClass,
        'has-addons',
        size ? size.replace(TEST_ID_REGEXP.IS, 'are-') : null,
        containerCssClasses
      ]),
    [size, containerCssClasses]
  )
  const tagClasses = parseClasses([
    tagBaseClass,
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    isLight && !withAddon ? COMMON_CLASSES.LIGHT : null,
    isRounded && !withAddon ? COMMON_CLASSES.ROUNDED : null,
    size,
    cssClasses
  ])
  const tagAddonClasses = parseClasses([
    tagBaseClass,
    addonColor ? `${COMMON_CLASSES.IS}${addonColor}` : null
  ])
  const tagLabel = withAddon ? tagsBaseClass : tagBaseClass
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
          className={`${tagBaseClass} is-delete`}
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
