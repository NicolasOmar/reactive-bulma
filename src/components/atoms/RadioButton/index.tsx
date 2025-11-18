import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { RadioButtonProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

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
      options.map((_optionConfig, optionIndex) => {
        const radioButtonTestId =
          _optionConfig.testId ?? `test-radio-button-item-${optionIndex}`
        const radioButtonBaseStyle = {
          display: 'inline-block',
          marginLeft: '5px'
        }

        return (
          <label
            key={`radio-button-item-${generateKey()}`}
            className='radio'
          >
            <input
              data-testid={radioButtonTestId}
              type='radio'
              style={_optionConfig.style ?? undefined}
              name={name}
              defaultChecked={_optionConfig.isChecked}
              disabled={_optionConfig.isDisabled}
              onClick={onClick}
              onChange={onChange}
              onBlur={onBlur}
            />
            <p style={radioButtonBaseStyle}>{_optionConfig.label}</p>
          </label>
        )
      }),
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
