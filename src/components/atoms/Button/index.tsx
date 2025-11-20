import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { ButtonProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

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
  const buttonBaseClass = 'button'
  const buttonClasses = useMemo(
    () =>
      parseClasses([
        buttonBaseClass,
        color ? `${COMMON_CLASSES.IS}${color}` : null,
        colorVersion,
        isInvertedColor ? COMMON_CLASSES.INVERTED : null,
        isOutlined ? COMMON_CLASSES.OUTLINED : null,
        isRounded ? COMMON_CLASSES.ROUNDED : null,
        isLoading ? COMMON_CLASSES.LOADING : null,
        isStatic ? COMMON_CLASSES.STATIC : null,
        isSelected ? COMMON_CLASSES.SELECTED : null,
        isFullWidth ? COMMON_CLASSES.FULL_WIDTH : null,
        isResponsive ? COMMON_CLASSES.RESPONSIVE : null,
        size,
        cssClasses
      ]),
    [
      color,
      colorVersion,
      isInvertedColor,
      isOutlined,
      isRounded,
      isLoading,
      isStatic,
      isSelected,
      isFullWidth,
      isResponsive,
      size,
      cssClasses
    ]
  )
  const buttonTestId = useMemo(
    () =>
      testId ??
      parseTestId({ tag: buttonBaseClass, parsedClasses: buttonClasses }),
    [testId, buttonClasses]
  )

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
