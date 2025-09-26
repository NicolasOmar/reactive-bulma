import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { TileProps } from '@interfaces/atomProps'
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
  const tileClasses = parseClasses([
    'tile',
    context,
    size,
    color ? `notification ${color}` : null,
    isVertical ? 'is-vertical' : null,
    cssClasses
  ])
  const tileTestId =
    testId ??
    parseTestId({
      tag: 'tile',
      parsedClasses: tileClasses,
      rules: [
        {
          regExp: /notification |tile/gm,
          replacer: ''
        },
        {
          regExp: /is-/gm,
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
