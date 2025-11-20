import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { TileProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Tile: React.FC<TileProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children,
  context = null,
  size = null,
  color = null,
  isVertical = false
}) => {
  const tileBaseClass = 'tile'
  const tileClasses = parseClasses([
    tileBaseClass,
    context,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    color ? `${COMMON_CLASSES.NOTIFICATION} ${color}` : null,
    isVertical ? `${COMMON_CLASSES.VERTICAL}` : null,
    cssClasses
  ])
  const tileTestId =
    testId ??
    parseTestId({
      tag: tileBaseClass,
      parsedClasses: tileClasses,
      rules: [
        {
          regExp: TEST_ID_REGEXP.TILE,
          replacer: ''
        },
        {
          regExp: TEST_ID_REGEXP.IS,
          replacer: '-'
        }
      ]
    })

  return (
    <section
      data-testid={tileTestId}
      className={tileClasses}
      style={style ?? undefined}
    >
      {children}
    </section>
  )
}

export default Tile
