import React from 'react'
// TYPES & INTERFACES
import { IconProps } from '@interfaces/atomProps'
import { ColorTypes } from '@customTypes/styleTypes'
import { IconSizeEnum } from '@customTypes/domTypes'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const generateIconContainer = (
  icon: React.ReactElement,
  color: ColorTypes | null
) => {
  const containerClasses = color ? `icon-text-${color}` : 'icon-text'
  const containerTestId = parseTestId({
    tag: 'icon-container',
    parsedClasses: color ? `${COMMON_CLASSES.HAS_TEXT}${color}` : '',
    rules: [{ regExp: TEST_ID_REGEXP.HAS_TEXT, replacer: '' }]
  })

  return (
    <span
      data-testid={containerTestId}
      className={containerClasses}
    >
      {icon}
    </span>
  )
}

const Icon: React.FC<IconProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  iconLabel,
  text = null,
  color = null,
  size = null,
  colorMode = null,
  isSpinning = false,
  position = null
}) => {
  const iconContainerClasses = parseClasses([
    'icon',
    color ? `${COMMON_CLASSES.HAS_TEXT}${color}` : null,
    size,
    position,
    containerCssClasses
  ])
  const iconClasses = parseClasses([
    'mdi',
    `mdi-${iconLabel}`,
    colorMode ? `mdi-${colorMode}` : null,
    isSpinning ? 'mdi-spin' : null,
    size ? `mdi-${IconSizeEnum[size]}px` : 'mdi-24px',
    cssClasses
  ])
  const iconContainertestId =
    containerTestId ??
    parseTestId({
      tag: 'icon',
      parsedClasses: iconClasses,
      rules: [
        {
          regExp: TEST_ID_REGEXP.MDI,
          replacer: ''
        },
        {
          regExp: TEST_ID_REGEXP.MDI_EMPTY,
          replacer: '-'
        }
      ],
      separator: '-'
    })
  const iconTestId = testId ?? `${iconContainertestId}-i`
  const iconComponent = (
    <span
      data-testid={iconContainertestId}
      className={iconContainerClasses}
      style={containerStyle ?? undefined}
    >
      <i
        data-testid={iconTestId}
        className={iconClasses}
        style={style ?? undefined}
      ></i>
      {text ? <span>{text}</span> : null}
    </span>
  )

  return text ? generateIconContainer(iconComponent, color) : iconComponent
}

export default Icon
