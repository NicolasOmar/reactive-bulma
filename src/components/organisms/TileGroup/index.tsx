import React from 'react'
// COMPONENTS
import { Tile } from '../../atoms'
// TYPES & INTERFACES
import { TileGroupProps } from '../../../interfaces/organismProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const TileGroup: React.FC<TileGroupProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  context = 'is-ancestor',
  size = null,
  isVertical = false,
  groupConfig
}) => {
  const tileGroupClasses = parseClasses([
    'tileGroup',
    context,
    size,
    isVertical ? 'is-vertical' : null,
    cssClasses
  ])
  const tileBoxTestId =
    testId ??
    parseTestId({
      tag: 'tileGroup',
      parsedClasses: tileGroupClasses,
      rules: [
        {
          regExp: /tileGroup/gm,
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
      cssClasses={cssClasses ?? undefined}
      style={style ?? undefined}
      context={context}
      size={size ?? undefined}
      isVertical={isVertical}
    >
      {groupConfig.map(tileConfig => (
        <Tile
          key={`tile-item-${generateKey()}`}
          {...tileConfig}
        />
      ))}
    </Tile>
  )
}

export default TileGroup
