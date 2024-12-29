import React from 'react'
// TYPES & INTERFACES
import { TextAreaProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const TextArea: React.FC<TextAreaProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  value = null,
  name,
  cols = null,
  rows = null,
  isDisabled = false,
  isReadonly = false,
  isFixedSize = false,
  color = null,
  size = null,
  isHovered = null,
  isFocused = null,
  onClick = null,
  onChange = null
}) => {
  const textAreaClasses = parseClasses([
    'textarea',
    color,
    size,
    isHovered ? 'is-hovered' : null,
    isFocused ? 'is-focused' : null,
    isFixedSize ? 'has-fixed-size' : null,
    cssClasses
  ])
  const textAreaTestId =
    testId ??
    parseTestId({
      tag: 'textarea',
      parsedClasses: textAreaClasses,
      rules: [
        {
          regExp: /textarea/gm,
          replacer: ''
        },
        {
          regExp: /is-|has-/gm,
          replacer: '-'
        }
      ]
    })

  return (
    <textarea
      data-testid={textAreaTestId}
      value={value ?? undefined}
      name={name}
      cols={cols ?? undefined}
      rows={rows ?? undefined}
      disabled={isDisabled}
      readOnly={isReadonly}
      className={textAreaClasses}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
      onChange={onChange ?? undefined}
    />
  )
}

export default TextArea
