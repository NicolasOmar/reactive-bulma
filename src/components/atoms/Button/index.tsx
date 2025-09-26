import React from 'react'
// TYPES & INTERFACES
import { ButtonProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Button: React.FC<ButtonProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  type = 'button',
  isAnAnchor = false,
  anchorHref = null,
  text = null,
  isDisabled = false,
  color = null,
  colorVersion = null,
  isInvertedColor = false,
  isOutlined = false,
  isRounded = false,
  isLoading = false,
  isStatic = false,
  isSelected = false,
  isFullWidth = false,
  isResponsive = false,
  size = null,
  onClick = null
}) => {
  const buttonClasses = parseClasses([
    'button',
    color,
    colorVersion ? `is-${colorVersion}` : null,
    isInvertedColor ? 'is-inverted' : null,
    isOutlined ? 'is-outlined' : null,
    isRounded ? 'is-rounded' : null,
    isLoading ? 'is-loading' : null,
    isStatic ? 'is-static' : null,
    isSelected ? 'is-selected' : null,
    isFullWidth ? 'is-fullwidth' : null,
    isResponsive ? 'is-responsive' : null,
    size,
    cssClasses
  ])
  const buttonTestId =
    testId ?? parseTestId({ tag: 'button', parsedClasses: buttonClasses })

  return isAnAnchor ? (
    <a
      data-testid={buttonTestId}
      className={buttonClasses}
      style={style ?? undefined}
      aria-disabled={isDisabled}
      href={anchorHref ?? undefined}
      onClick={onClick ?? undefined}
    >
      {text}
    </a>
  ) : (
    <button
      data-testid={buttonTestId}
      type={type}
      className={buttonClasses}
      style={style ?? undefined}
      disabled={isDisabled}
      onClick={onClick ?? undefined}
    >
      {text}
    </button>
  )
}

export default Button
