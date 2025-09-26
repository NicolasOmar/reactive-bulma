import React from 'react'
// TYPES & INTERFACES
import { ImageProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

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
  isRounded = false
}) => {
  const imageContainerClasses = parseClasses([
    'image',
    fixedSize,
    containerCssClasses
  ])
  const imageClasses = parseClasses([
    isRounded ? 'is-rounded' : null,
    cssClasses
  ])
  const imageContainerTestId =
    containerTestId ??
    parseTestId({ tag: 'image', parsedClasses: imageContainerClasses })
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
