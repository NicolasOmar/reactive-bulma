import React from 'react'
// TYPES & INTERFACES
import { InputProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

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
    isRounded ? 'is-rounded' : null,
    isHovered ? 'is-hovered' : null,
    isFocused ? 'is-focused' : null,
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
