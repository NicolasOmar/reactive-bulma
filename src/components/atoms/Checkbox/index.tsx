import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { CheckBoxProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const parseContentTestId = (label: string | null): string =>
  label ? '-with-component' : ''

const Checkbox: React.FC<CheckBoxProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  label = null,
  isChecked,
  name,
  value,
  isDisabled = false,
  onClick,
  onChange,
  onBlur
}) => {
  const checkboxContainerClasses = useMemo(
    () => parseClasses(['checkbox', containerCssClasses]),
    [containerCssClasses]
  )
  const checkboxContainerTestId = useMemo(
    () =>
      containerTestId ??
      parseTestId({
        tag: 'checkbox-container',
        parsedClasses: parseContentTestId(label)
      }),
    [containerTestId, label]
  )
  const checkboxTestId = useMemo(
    () =>
      testId ??
      parseTestId({
        tag: 'checkbox',
        parsedClasses: parseContentTestId(label)
      }),
    [testId, label]
  )
  const checkboxBaseStyle = {
    display: 'inline-block',
    marginLeft: '5px'
  }

  return (
    <section
      data-testid={checkboxContainerTestId}
      className={checkboxContainerClasses}
      style={containerStyle ?? undefined}
    >
      <input
        id={name}
        data-testid={checkboxTestId}
        type='checkbox'
        name={name}
        value={value}
        className={cssClasses ?? undefined}
        style={style ?? undefined}
        defaultChecked={isChecked}
        disabled={isDisabled}
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label
        style={checkboxBaseStyle}
        htmlFor={name}
      >
        {label}
      </label>
    </section>
  )
}

export default Checkbox
