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
        usedRegExp: /has-text/gm,
        regExpReplacer: ''
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
  iconLabel,
  testId = null,
  containerTestId = null,
  text = null,
  style = null,
  containerStyle = null,
  cssClasses = null,
  containerCssClasses = null,
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
  const _containerTestId =
    containerTestId ??
    parseTestId({
      tag: 'icon',
      parsedClasses: iconClasses,
      rules: [
        {
          usedRegExp: /mdi-|mdi--/gm,
          regExpReplacer: ''
        },
        {
          usedRegExp: /mdi /gm,
          regExpReplacer: '-'
        }
      ],
      separator: '-'
    })
  const _testId = testId ?? `${_containerTestId}-i`
  const iconComponent = (
    <span
      data-testid={_containerTestId}
      className={iconContainerClasses}
      style={containerStyle ?? undefined}
    >
      <i
        data-testid={_testId}
        className={iconClasses}
        style={style ?? undefined}
      ></i>
      {text ? <span>{text}</span> : null}
    </span>
  )

  return text ? generateIconContainer(iconComponent, color) : iconComponent
}

export default Icon
