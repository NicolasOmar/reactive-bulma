import React from 'react'
// TYPES & INTERFACES
import { IconProps } from '@interfaces/atomProps'
import { ColorType } from '@customTypes/styleTypes'
import { IconSizeEnum } from '@customTypes/domTypes'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const iconBaseClass = 'icon'
const mdiBaseClass = 'mdi'

const generateIconContainer = (
  icon: React.ReactElement,
  color: ColorType | null
) => {
  const containerClasses = color
    ? `${iconBaseClass}-text-${color}`
    : `${iconBaseClass}-text`
  const containerTestId = parseTestId({
    tag: `${iconBaseClass}-container`,
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
    iconBaseClass,
    color ? `${COMMON_CLASSES.HAS_TEXT}${color}` : null,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    position,
    containerCssClasses
  ])
  const iconClasses = parseClasses([
    mdiBaseClass,
    `${mdiBaseClass}-${iconLabel}`,
    colorMode ? `${mdiBaseClass}-${COMMON_CLASSES.IS}${colorMode}` : null,
    isSpinning ? `${mdiBaseClass}-spin` : null,
    size ? `${mdiBaseClass}-${IconSizeEnum[size]}px` : `${mdiBaseClass}-24px`,
    cssClasses
  ])
  const iconContainertestId =
    containerTestId ??
    parseTestId({
      tag: iconBaseClass,
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
