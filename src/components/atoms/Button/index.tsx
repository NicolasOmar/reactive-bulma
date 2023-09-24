import React from 'react'
// TYPES & INTERFACES
import { ButtonProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Button: React.FC<ButtonProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  type = 'button',
  text = null,
  isDisabled = false,
  color = 'is-primary',
  isLightColor = false,
  isInvertedColor = false,
  isOutlined = false,
  isRounded = false,
  isLoading = false,
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
    size,
    cssClasses
  ])
  const buttonTestId =
    testId ?? parseTestId({ tag: 'button', parsedClasses: buttonClasses })

  return (
    <button
      data-testid={buttonTestId}
      type={type}
      className={buttonClasses}
      style={style ?? undefined}
      disabled={isDisabled ?? false}
      onClick={onClick ?? undefined}
    >
      {text}
    </button>
  )
}

export default Button
