import React, { useMemo } from 'react'
// TYPES & INTERFACES
import {
  RadioButtonItemProps,
  RadioButtonProps
} from '../../../interfaces/atomProps'
import { parseClasses, parseTestId } from '../../../functions/parsers'
// FUNCTIONS

const renderRadioButton = (config: RadioButtonItemProps, index: number) => {
  const {
    testId = null,
    label,
    name,
    isChecked = false,
    isDisabled = false,
    style = null,
    onClick,
    onChange,
    onBlur
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
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
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
  onClick,
  onChange,
  onBlur
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

  const renderRadioButtons = useMemo(
    () =>
      options.map((_option, i) =>
        renderRadioButton(
          {
            ..._option,
            name,
            onClick,
            onChange,
            onBlur
          },
          i
        )
      ),
    [options, name, onClick, onChange, onBlur]
  )

  return (
    <section
      data-testid={radioButtonContainerTestId}
      className={radioButtonContainerClasses}
      style={containerStyle ?? undefined}
    >
      {renderRadioButtons}
    </section>
  )
}

export default RadioButton
