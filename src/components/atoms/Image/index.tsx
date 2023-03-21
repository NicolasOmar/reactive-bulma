import React from 'react'
// PROPS
import { ImageProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Image: React.FC<ImageProps> = ({
  src,
  testId = null,
  isRounded = false,
  fixedSize = 'is-1by1',
  style = null
}) => {
  const figureClasses = parseClasses([
    'image',
    isRounded ? 'is-rounded' : null,
    fixedSize
  ])
  const imageClasses = isRounded ? 'is-rounded' : undefined
  const _testId =
    testId ?? parseTestId({ tag: 'image', parsedClasses: figureClasses })

  return src ? (
    <figure
      data-testid={_testId}
      className={figureClasses}
      style={style ?? undefined}
    >
      <img
        src={src}
        className={imageClasses}
      />
    </figure>
  ) : null
}

export default Image
