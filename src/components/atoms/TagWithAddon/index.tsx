import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { TagWithAddonProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const TagWithAddon: React.FC<TagWithAddonProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  text,
  withDelete = false,
  addonText,
  color = null,
  isLight = null,
  isRounded = null,
  size = null,
  addonColor = null,
  onDeleteClick = null
}) => {
  const baseTagClass = 'tag'
  const tagWithAddonBaseClass = 'tags'
  const tagWithAddonContainerClasses = parseClasses([
    tagWithAddonBaseClass,
    COMMON_CLASSES.HAS_ADDONS,
    size ? `${COMMON_CLASSES.ARE}${size}` : null,
    containerCssClasses
  ])
  const baseTagClasses = parseClasses([
    baseTagClass,
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    isLight ? COMMON_CLASSES.LIGHT : null,
    isRounded ? COMMON_CLASSES.ROUNDED : null,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    cssClasses
  ])
  const tagAddonClasses = parseClasses([
    baseTagClass,
    addonColor ? `${COMMON_CLASSES.IS}${addonColor}` : null
  ])
  const tagWithAddonContainerTestId =
    containerTestId ??
    parseTestId({
      tag: tagWithAddonBaseClass,
      parsedClasses: tagWithAddonContainerClasses,
      rules: [
        { regExp: TEST_ID_REGEXP.TAGS, replacer: '' },
        { regExp: TEST_ID_REGEXP.HAS_ADDONS, replacer: '' }
      ]
    })
  const baseTagTestId =
    testId ?? parseTestId({ tag: baseTagClass, parsedClasses: baseTagClasses })
  const addonTagTestId = parseTestId({
    tag: `${baseTagClass}-addon`,
    parsedClasses: tagAddonClasses,
    rules: [
      { regExp: TEST_ID_REGEXP.TAG, replacer: '' },
      { regExp: TEST_ID_REGEXP.IS, replacer: '-' }
    ]
  })
  const tagDeleteTestId = `${addonTagTestId}-delete`

  return (
    <section
      data-testid={tagWithAddonContainerTestId}
      className={tagWithAddonContainerClasses}
      style={containerStyle ?? undefined}
    >
      <span
        data-testid={baseTagTestId}
        className={baseTagClasses}
      >
        {text}
      </span>
      {withDelete ? (
        <a
          data-testid={tagDeleteTestId}
          className={`${baseTagClass} is-delete`}
          title='delete'
          aria-hidden='true'
          onClick={onDeleteClick ?? undefined}
        ></a>
      ) : (
        <span
          data-testid={addonTagTestId}
          className={tagAddonClasses}
          style={style ?? undefined}
        >
          {addonText}
        </span>
      )}
    </section>
  )
}

export default TagWithAddon
