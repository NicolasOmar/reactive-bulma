import React from 'react'
// TYPES & INTERFACES
import { ImageProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { COMMON_CLASSES } from '@constants/classes'

const Image: React.FC<ImageProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  src,
  alt = null,
  fixedSize = null,
  isSkeleton = false,
  isRounded = false
}) => {
  const imageBaseClass = 'image'
  const imageContainerClasses = parseClasses([
    imageBaseClass,
    fixedSize ? `${COMMON_CLASSES.IS}${fixedSize}` : null,
    isSkeleton ? COMMON_CLASSES.SKELETON : null,
    containerCssClasses
  ])
  const imageClasses = parseClasses([
    isRounded ? COMMON_CLASSES.ROUNDED : null,
    cssClasses
  ])
  const imageContainerTestId =
    containerTestId ??
    parseTestId({ tag: imageBaseClass, parsedClasses: imageContainerClasses })
  const imageTestId = testId ?? `${imageContainerTestId}-img`

  return (
    <figure
      data-testid={imageContainerTestId}
      className={imageContainerClasses}
      style={containerStyle ?? undefined}
    >
      <img
        data-testid={imageTestId}
        className={imageClasses}
        style={style ?? undefined}
        src={src}
        alt={alt ?? undefined}
      />
    </figure>
  )
}

export default Image
