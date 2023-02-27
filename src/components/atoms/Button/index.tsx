import React from 'react'
// COMPONENT
import { ButtonProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/persers'

const Button: React.FC<ButtonProps> = ({
  text = null,
  type = 'button',
  color = 'is-white',
  isLightColor = false,
  isInvertedColor = false,
  isOutlined = false,
  isRounded = false,
  isLoading = false,
  isDisabled = false,
  isStatic = false,
  size = null,
  onClick = null
}) => {
  const buttonClasses = parseClasses([
    'button',
    color,
    isLightColor ? 'is-light' : null,
    isInvertedColor ? 'is-inverted' : null,
    isOutlined ? 'is-outlined' : null,
    isRounded ? 'is-rounded' : null,
    isLoading ? 'is-loading' : null,
    isStatic ? 'is-static' : null,
    size
  ])

  return (
    <button
      data-testid='test-button'
      type={type}
      className={buttonClasses}
      disabled={isDisabled ?? false}
      onClick={onClick ?? undefined}
    >
      {text}
    </button>
  )
}

export default Button
