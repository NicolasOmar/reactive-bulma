import React from 'react'
import { IconProps } from '../../../interfaces/atomProps'
import { parseClasses } from '../../../functions/parsers'
import { textColorType } from '../../../types/styleTypes'
import { parseTestId } from '../../../functions/parsers'
import { IconSizeEnum } from '../../../types/componentEnums'

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
    size ? `mdi-${IconSizeEnum[size]}px` : 'mdi-24px'
  ])
  const _testId =
    testId ??
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
  const _internalTestId = `${_testId}-i`
  const iconComponent = (
    <span
      data-testid={_testId}
      style={style || undefined}
      className={iconSpanClasses}
    >
      <i
        data-testid={_internalTestId}
        className={iconClasses}
      ></i>
      {text ? <span>{text}</span> : null}
    </span>
  )

  return text ? generateIconContainer(iconComponent, color) : iconComponent
}

export default Icon
