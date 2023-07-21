import React from 'react'
// TYPES & INTERFACES
import { CheckBoxProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const parseContentTestId = (
  content: string | React.ReactElement | null
): string => {
  if (typeof content === 'string') return `-${content?.toString()}`
  if (content !== null) return '-with-component'
  return ''
}

const CheckBox: React.FC<CheckBoxProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  content = null,
  isDisabled = null,
  onChange = null
}) => {
  const checkboxContainerClasses = parseClasses([
    'checkbox',
    containerCssClasses
  ])
  const _containerTestId =
    containerTestId ??
    parseTestId({
      tag: 'checkbox-container',
      parsedClasses: parseContentTestId(content)
    })
  const _testId =
    testId ??
    parseTestId({
      tag: 'checkbox',
      parsedClasses: parseContentTestId(content)
    })

  return (
    <label
      data-testid={_containerTestId}
      className={checkboxContainerClasses}
      style={containerStyle ?? undefined}
    >
      <input
        data-testid={_testId}
        type='checkbox'
        className={cssClasses ?? undefined}
        style={style ?? undefined}
        disabled={isDisabled ?? false}
        onChange={onChange ?? undefined}
      />
      {content}
    </label>
  )
}

export default CheckBox
