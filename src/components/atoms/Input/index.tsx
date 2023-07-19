import React from 'react'
// TYPES & INTERFACES
import { InputProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Input: React.FC<InputProps> = ({
  testId = null,
  type,
  text = null,
  isDisabled = false,
  isReadonly = false,
  style = null,
  cssClasses = null,
  color = null,
  size = null,
  isRounded = null,
  isHovered = null,
  isFocused = null,
  onClick = null,
  onChange = null
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
  const _testId =
    testId ??
    parseTestId({
      tag: 'input',
      parsedClasses: inputClasses
    })

  return (
    <input
      data-testid={_testId}
      type={type}
      defaultValue={text ?? undefined}
      disabled={isDisabled}
      readOnly={isReadonly}
      style={style ?? undefined}
      className={inputClasses}
      onClick={onClick ?? undefined}
      onChange={onChange ?? undefined}
    />
  )
}

export default Input
