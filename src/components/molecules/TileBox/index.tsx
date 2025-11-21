import React from 'react'
// COMPONENTS
import { Tile } from '@components/atoms'
// TYPES & INTERFACES
import { TileProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const TileBox: React.FC<TileProps> = ({
  testId = null,
  cssClasses = 'box',
  style = null,
  children = null,
  context = 'is-child',
  size,
  color,
  isVertical
}) => {
  const tileBoxClasses = parseClasses([
    'tileBox',
    context,
    size,
    color ? `notification ${color}` : null,
    isVertical ? 'is-vertical' : null,
    cssClasses
  ])
  const tileBoxTestId =
    testId ??
    parseTestId({
      tag: 'tileBox',
      parsedClasses: tileBoxClasses,
      rules: [
        {
          regExp: /notification |tileBox/gm,
          replacer: ''
        },
        {
          regExp: /is-/gm,
          replacer: '-'
        }
      ]
    })

  return (
    <Tile
      testId={tileBoxTestId}
      cssClasses={cssClasses}
      style={style ?? undefined}
      isVertical={isVertical}
      context={context}
      size={size}
      color={color}
    >
      {children ?? undefined}
    </Tile>
  )
}

export default TileBox
