import React from 'react'
// TYPES & INTERFACES
import { ButtonProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Button: React.FC<ButtonProps> = ({
  text = null,
  type = 'button',
  testId = null,
  style = null,
  cssClasses = null,
  color = 'is-primary',
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
    size,
    cssClasses
  ])
  const _testId =
    testId ?? parseTestId({ tag: 'button', parsedClasses: buttonClasses })

  return (
    <button
      data-testid={_testId}
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
