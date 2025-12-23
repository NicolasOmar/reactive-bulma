import React from 'react'
// TYPES & INTERFACES
import { InputProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { COMMON_CLASSES } from '@constants/classes'

const Input: React.FC<InputProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  type,
  value = null,
  name,
  placeholder = null,
  isDisabled = false,
  isReadonly = false,
  isSkeleton = false,
  color = null,
  size = null,
  isRounded = null,
  isHovered = null,
  isFocused = null,
  onClick,
  onChange,
  onBlur
}) => {
  const inputClasses = parseClasses([
    'input',
    color,
    size,
    isRounded ? COMMON_CLASSES.ROUNDED : null,
    isHovered ? COMMON_CLASSES.HOVERED : null,
    isFocused ? COMMON_CLASSES.FOCUSED : null,
    isSkeleton ? COMMON_CLASSES.SKELETON : null,
    cssClasses
  ])
  const inputTestId =
    testId ??
    parseTestId({
      tag: 'input',
      parsedClasses: inputClasses
    })

  return (
    <input
      data-testid={inputTestId}
      type={type}
      placeholder={placeholder ?? undefined}
      value={value ?? undefined}
      name={name}
      disabled={isDisabled}
      readOnly={isReadonly}
      className={inputClasses}
      style={style ?? undefined}
      onClick={onClick}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default Input
