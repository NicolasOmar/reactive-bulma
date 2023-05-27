import React from 'react'
// TYPES & INTERFACES
import { TextAreaProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const TextArea: React.FC<TextAreaProps> = ({
  testId = null,
  text = null,
  cols = null,
  rows = null,
  isDisabled = false,
  isReadonly = false,
  style = null,
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
    isFocused ? 'is-focused' : null
  ])
  const _testId =
    testId ??
    parseTestId({
      tag: 'textarea',
      parsedClasses: textAreaClasses
    })
  return (
    <textarea
      data-testid={_testId}
      value={text ?? undefined}
      cols={cols ?? undefined}
      rows={rows ?? undefined}
      disabled={isDisabled}
      readOnly={isReadonly}
      style={style ?? undefined}
      className={textAreaClasses}
      onClick={onClick ?? undefined}
      onChange={onChange ?? undefined}
    />
  )
}

export default TextArea
