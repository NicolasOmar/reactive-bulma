import React from 'react'
import { ButtonProps } from '../../../interfaces/atomProps'

const Button: React.FC<ButtonProps> = ({ text = '' }) => (
  <button className='button'>{text}</button>
)

export default Button
