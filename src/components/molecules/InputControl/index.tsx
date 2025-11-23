import React, { useMemo } from 'react'
// COMPONENTS
import { Icon, Input } from '@components/atoms'
// TYPES & INTERFACES
import { InputControlProps } from '@interfaces/moleculeProps'
import { IconProps } from '@interfaces/atomProps'
// CONSTANTS
import { TEST_ID_REGEXP } from '@constants/regExp'
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { ColorType } from '@customTypes/styleTypes'

const renderIcon = (iconConfig?: IconProps): React.ReactElement | null =>
  iconConfig ? <Icon {...iconConfig} /> : null

const parseHelperColor = (color?: ColorType): string | null =>
  color ? `${COMMON_CLASSES.IS}${color}` : null

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
  const controlBaseClass = 'control'
  const inputControlClasses = parseClasses([
    controlBaseClass,
    size,
    leftIcon ? COMMON_CLASSES.ICON_LEFT : null,
    rightIcon ? COMMON_CLASSES.ICON_RIGHT : null,
    isLoading ? COMMON_CLASSES.LOADING : null,
    isExpanded ? COMMON_CLASSES.EXPANDED : null,
    cssClasses
  ])
  const inputControlTestId =
    testId ??
    parseTestId({
      tag: controlBaseClass,
      parsedClasses: inputControlClasses,
      rules: [
        {
          regExp: TEST_ID_REGEXP.IS_HAS,
          replacer: '-'
        },
        {
          regExp: TEST_ID_REGEXP.CONTROL,
          replacer: ''
        }
      ]
    })

  const memorizedLabel = useMemo(() => {
    if (labelText === null) return null

    const labelSection = (
      <label
        data-testid={`${inputControlTestId}-label`}
        className='label'
      >
        {labelText}
      </label>
    )

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
    () => renderIcon(leftIcon ? { ...leftIcon, position: 'left' } : undefined),
    [leftIcon]
  )
  const memoizedRightIcon = useMemo(
    () =>
      renderIcon(rightIcon ? { ...rightIcon, position: 'right' } : undefined),
    [rightIcon]
  )
  const memorizedHelper = useMemo(() => {
    if (helper === null) return null

    const helperBaseClass = 'help'
    const helperColor = parseHelperColor(inputConfig?.color ?? helper?.color)
    const fieldHelperClasses = parseClasses([helperBaseClass, helperColor])
    const fieldHelperTestId = parseTestId({
      tag: helperBaseClass,
      parsedClasses: fieldHelperClasses,
      rules: [{ regExp: TEST_ID_REGEXP.HELP, replacer: '' }]
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
