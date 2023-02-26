import React from 'react'
// COMPONENT
import { ButtonProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/persers'

const Button: React.FC<ButtonProps> = ({
  text = null,
  color = null,
  isLightColor = null,
  isInvertedColor = null,
  isOutlined = null,
  isRounded = null,
  isLoading = null,
  isDisabled = false,
  size = null
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
    >
      {text}
    </button>
  )
}

export default Button
