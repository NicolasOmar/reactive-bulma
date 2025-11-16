import React, { useMemo } from 'react'
// COMPONENTS
import { Icon, Input } from '@components/atoms'
// TYPES & INTERFACES
import { InputControlProps } from '@interfaces/moleculeProps'
import { IconProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

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
  isLoading = null,
  isExpanded = null
}) => {
  const inputControlClasses = parseClasses([
    'control',
    size,
    leftIcon ? 'has-icons-left' : null,
    rightIcon ? 'has-icons-right' : null,
    isLoading ? 'is-loading' : null,
    isExpanded ? 'is-expanded' : null,
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

  const memoizedInputConfig = useMemo(
    () => (
      <Input
        {...{
          ...inputConfig,
          size: size ?? inputConfig?.size
        }}
      />
    ),
    [inputConfig, size]
  )
  const memoizedLeftIcon = useMemo(
    () =>
      renderIcon(leftIcon ? { ...leftIcon, position: 'is-left' } : undefined),
    [leftIcon]
  )
  const memoizedRightIcon = useMemo(
    () =>
      renderIcon(
        rightIcon ? { ...rightIcon, position: 'is-right' } : undefined
      ),
    [rightIcon]
  )

  return (
    <section
      data-testid={inputControlTestId}
      className={inputControlClasses}
      style={style ?? undefined}
    >
      {memoizedInputConfig}
      {memoizedLeftIcon}
      {memoizedRightIcon}
    </section>
  )
}

export default InputControl
