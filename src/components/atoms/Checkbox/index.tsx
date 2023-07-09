import React from 'react'
// TYPES & INTERFACES
import { CheckboxProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

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
      parsedClasses:
        typeof content === 'string'
          ? `-${content?.toString()}`
          : content !== null
          ? '-with-component'
          : ''
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
