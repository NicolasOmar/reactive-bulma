import React from 'react'
// COMPONENTS
import { Tile } from '@components/atoms'
// TYPES & INTERFACES
import { TileGroupProps } from '@interfaces/organismProps'
// CONSTANTS
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const TileGroup: React.FC<TileGroupProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  context = 'is-ancestor',
  size = null,
  isVertical = false,
  groupConfig
}) => {
  const titleGroupBaseClass = 'tile-group'
  const tileGroupClasses = parseClasses([
    titleGroupBaseClass,
    context,
    size,
    isVertical ? 'is-vertical' : null,
    cssClasses
  ])
  const tileBoxTestId =
    testId ??
    parseTestId({
      tag: titleGroupBaseClass,
      parsedClasses: tileGroupClasses,
      rules: [
        { regExp: TEST_ID_REGEXP.TILE_GROUP, replacer: '' },
        { regExp: TEST_ID_REGEXP.IS, replacer: '-' }
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
