import React from 'react'
import { ButtonProps } from '../../../interfaces/atomProps'

const Button: React.FC<ButtonProps> = ({ text = '' }) => (
  <button
    data-testid='test-button'
    className='button'
  >
    {text}
  </button>
)

export default Button
