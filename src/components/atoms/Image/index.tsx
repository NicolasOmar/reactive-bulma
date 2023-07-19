import React from 'react'
// TYPES & INTERFACES
import { ImageProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Image: React.FC<ImageProps> = ({
  src,
  testId = null,
  containerTestId = null,
  isRounded = false,
  fixedSize = 'is-1by1',
  style = null,
  containerStyle = null,
  cssClasses = null,
  containerCssClasses = null
}) => {
  const containerClasses = parseClasses([
    'image',
    fixedSize,
    containerCssClasses
  ])
  const imageClasses = parseClasses([
    isRounded ? 'is-rounded' : null,
    cssClasses
  ])
  const _containerTestId =
    containerTestId ??
    parseTestId({ tag: 'image', parsedClasses: containerClasses })
  const _testId = testId ?? `${_containerTestId}-img`

  return (
    <figure
      data-testid={_containerTestId}
      className={containerClasses}
      style={containerStyle ?? undefined}
    >
      <img
        src={src}
        data-testid={_testId}
        className={imageClasses}
        style={style ?? undefined}
      />
    </figure>
  )
}

export default Image
