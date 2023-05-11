import React from 'react'
import { IconProps } from '../../../interfaces/atomProps'
import { parseClasses } from '../../../functions/parsers'
import { textColorType } from '../../../types/styleTypes'
import { parseTestId } from '../../../functions/parsers'

const iconSizes = {
  'is-small': 24,
  'is-medium': 36,
  'is-large': 48
}

const generateIconContainer = (
  icon: React.ReactElement,
  color: textColorType | null
) => <span className={`icon-text${color ? ` ${color}` : ''}`}>{icon}</span>

const Icon: React.FC<IconProps> = ({
  iconLabel,
  testId = null,
  text = null,
  style = null,
  color = null,
  size = null,
  colorMode = null,
  isSpinning = false
}) => {
  const iconSpanClasses = parseClasses(['icon', color, size])
  const iconClasses = parseClasses([
    'mdi',
    `mdi-${iconLabel}`,
    colorMode ? `mdi-${colorMode}` : null,
    isSpinning ? 'mdi-spin' : null,
    size ? `mdi-${iconSizes[size]}px` : 'mdi-24px'
  ])
  const _testId =
    testId ?? parseTestId({ tag: 'icon', parsedClasses: iconClasses })
  const iconComponent = (
    <span
      data-testid={_testId}
      style={style || undefined}
      className={iconSpanClasses}
    >
      <i className={iconClasses}></i>
      {text ? <span>{text}</span> : null}
    </span>
  )

  return text ? generateIconContainer(iconComponent, color) : iconComponent
}

export default Icon
