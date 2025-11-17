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
  labelText = null,
  inputConfig,
  helper = null,
  leftIcon = null,
  rightIcon = null,
  size = null,
  isLoading = null,
  isExpanded = null,
  isHorizontal = null
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

  const memorizedLabel = useMemo(() => {
    const labelSection =
      labelText !== null ? (
        <label
          data-testid={`${inputControlTestId}-label`}
          className='label'
        >
          {labelText}
        </label>
      ) : null

    return isHorizontal ? (
      <section className='field-label'>{labelSection}</section>
    ) : (
      labelSection
    )
  }, [labelText, inputControlTestId, isHorizontal])
  const memoizedInput = useMemo(
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
  const memorizedHelper = useMemo(() => {
    if (helper === null) return null

    const fieldHelperClasses = parseClasses([
      'help',
      inputConfig.color ?? helper.color ?? null
    ])
    const fieldHelperTestId = parseTestId({
      tag: 'help',
      parsedClasses: fieldHelperClasses,
      rules: [{ regExp: /help|is/gm, replacer: '' }]
    })

    return (
      <p
        data-testid={fieldHelperTestId}
        className={fieldHelperClasses}
      >
        {helper.text}
      </p>
    )
  }, [helper, inputConfig.color])

  return (
    <>
      {memorizedLabel}
      <section
        data-testid={inputControlTestId}
        className={inputControlClasses}
        style={style ?? undefined}
      >
        {memoizedInput}
        {memoizedLeftIcon}
        {memoizedRightIcon}
      </section>
      {memorizedHelper}
    </>
  )
}

export default InputControl
