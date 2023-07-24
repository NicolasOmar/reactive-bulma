import React from 'react'
// TYPES & INTERFACES
import { IconProps } from '../../../interfaces/atomProps'
import { textColorType } from '../../../types/styleTypes'
import { IconSizeEnum } from '../../../types/componentEnums'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const generateIconContainer = (
  icon: React.ReactElement,
  color: textColorType | null
) => {
  const containerClasses = color ? `icon-text-${color}` : 'icon-text'
  const containerTestId = parseTestId({
    tag: 'icon-container',
    parsedClasses: color?.toString() ?? '',
    rules: [
      {
        regExp: /has-text/gm,
        replacer: ''
      }
    ]
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
  isSpinning = false
}) => {
  const iconContainerClasses = parseClasses([
    'icon',
    color,
    size,
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
          regExp: /mdi-|mdi--/gm,
          replacer: ''
        },
        {
          regExp: /mdi /gm,
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
