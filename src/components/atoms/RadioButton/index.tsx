import React from 'react'
// TYPES & INTERFACES
import { RadioButtonProps } from '../../../interfaces/atomProps'
// PARSERS

const RadioButton: React.FC<RadioButtonProps> = ({ options }) => {
  return (
    <section
      data-testid='test-radiobutton'
      className='control'
    >
      {options.map(
        ({ label, name, isChecked = false, isDisabled = false }, i) => (
          <label
            key={i}
            className='radio'
          >
            <input
              type='radio'
              name={name}
              checked={isChecked}
              disabled={isDisabled}
            />
            {label}
          </label>
        )
      )}
    </section>
  )
}

export default RadioButton
