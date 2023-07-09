import React from 'react'
// TYPES & INTERFACES
import { CheckboxProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const parseContentTestId = (
  content: string | React.ReactElement | null
): string => {
  if (typeof content === 'string') return `-${content?.toString()}`
  if (content !== null) return '-with-component'
  return ''
}

const Checkbox: React.FC<CheckboxProps> = ({
  testId = null,
  style = null,
  content = null,
  isDisabled = null,
  onChange = null
}) => {
  const checkboxClasses = parseClasses(['checkbox'])
  const _testId =
    testId ??
    parseTestId({
      tag: 'checkbox',
      parsedClasses: parseContentTestId(content)
    })
  return (
    <label
      className={checkboxClasses}
      style={style ?? undefined}
    >
      <input
        data-testid={_testId}
        type='checkbox'
        disabled={isDisabled ?? false}
        onChange={onChange ?? undefined}
      />
      {content}
    </label>
  )
}

export default Checkbox
