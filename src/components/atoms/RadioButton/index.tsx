import React from 'react'
// TYPES & INTERFACES
import {
  RadioButtonItemProps,
  RadioButtonProps
} from '../../../interfaces/atomProps'
import { parseClasses, parseTestId } from '../../../functions/parsers'
// PARSERS

const renderRadioButton = (config: RadioButtonItemProps, index: number) => {
  const {
    testId = null,
    label,
    name,
    isChecked = false,
    isDisabled = false,
    style = null,
    onChange
  } = config
  const radioButtonTestId = testId ?? `test-radio-button-item-${index}`

  return (
    <label
      key={index}
      className='radio'
    >
      <input
        data-testid={radioButtonTestId}
        type='radio'
        style={style ?? undefined}
        name={name}
        defaultChecked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      {label}
    </label>
  )
}

const RadioButton: React.FC<RadioButtonProps> = ({
  containerTestId = null,
  containerCssClasses = null,
  containerStyle = null,
  options,
  name,
  onChange = null
}) => {
  const radioButtonContainerClasses = parseClasses([
    'control',
    containerCssClasses
  ])
  const radioButtonContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'container-',
      parsedClasses: radioButtonContainerClasses
    })

  return (
    <section
      data-testid={radioButtonContainerTestId}
      className={radioButtonContainerClasses}
      style={containerStyle ?? undefined}
    >
      {options.map((_option, i) =>
        renderRadioButton(
          {
            ..._option,
            name,
            onChange: onChange ?? undefined
          },
          i
        )
      )}
    </section>
  )
}

export default RadioButton
