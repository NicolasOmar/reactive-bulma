import React from 'react'
// COMPONENT
import { ButtonProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/persers'

const Button: React.FC<ButtonProps> = ({
  text = null,
  color = 'is-white',
  isLightColor = false,
  isInvertedColor = false,
  isOutlined = false,
  isRounded = false,
  isLoading = false,
  isDisabled = false,
  size = null,
  onClick = () => console.warn('Button clicked')
}) => {
  const buttonClasses = parseClasses([
    'button',
    color,
    isLightColor ? 'is-light' : null,
    isInvertedColor ? 'is-inverted' : null,
    isOutlined ? 'is-outlined' : null,
    isRounded ? 'is-rounded' : null,
    isLoading ? 'is-loading' : null,
    size
  ])

  return (
    <button
      data-testid='test-button'
      className={buttonClasses}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
