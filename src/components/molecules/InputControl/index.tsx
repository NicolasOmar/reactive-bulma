import React from 'react'
// COMPONENTS
import { Icon, Input } from '../../atoms'
// TYPES & INTERFACES
import { InputControlProps } from '../../../interfaces/moleculeProps'
import { IconProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const renderIcon = (iconConfig?: IconProps): React.ReactElement | null =>
  iconConfig ? <Icon {...iconConfig} /> : null

const InputControl: React.FC<InputControlProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  inputConfig,
  leftIcon = null,
  rightIcon = null,
  size = null,
  isLoading = null
}) => {
  const inputControlClasses = parseClasses([
    'control',
    size,
    isLoading ? 'is-loading' : null,
    leftIcon ? 'has-icons-left' : null,
    rightIcon ? 'has-icons-right' : null,
    cssClasses
  ])
  const inputControlTestId =
    testId ??
    parseTestId({
      tag: 'control',
      parsedClasses: inputControlClasses,
      rules: [
        {
          regExp: /has-|is-/gm,
          replacer: '-'
        },
        {
          regExp: /control/gm,
          replacer: ''
        }
      ]
    })
  const reflectedInputConfig = {
    ...inputConfig,
    size: size ?? inputConfig?.size
  }

  return (
    <section
      data-testid={inputControlTestId}
      className={inputControlClasses}
      style={style ?? undefined}
    >
      <Input {...reflectedInputConfig} />
      {renderIcon(leftIcon ? { ...leftIcon, position: 'is-left' } : undefined)}
      {renderIcon(
        rightIcon ? { ...rightIcon, position: 'is-right' } : undefined
      )}
    </section>
  )
}

export default InputControl
