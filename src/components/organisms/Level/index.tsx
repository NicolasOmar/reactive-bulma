import React, { useMemo } from 'react'
// COMPONENTS
import { LevelItem } from '@components/molecules'
// TYPES & INTERFACES
import { LevelProps } from '@interfaces/organismProps'
import { LevelItemProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const renderLevelSection = (
  levelItemList: LevelItemProps[] | null,
  side: 'center' | 'right' | 'left'
) => {
  if (levelItemList === null) return null

  const renderedLevelItems = levelItemList.map(_levelItemConfig => (
    <LevelItem
      key={`level-item-${generateKey()}`}
      {..._levelItemConfig}
    />
  ))

  if (side === 'center') {
    return renderedLevelItems
  } else {
    return <section className={`level-${side}`}>{renderedLevelItems}</section>
  }
}

const Level: React.FC<LevelProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  leftSide = null,
  centerSide = null,
  rightSide = null,
  isMobile = false
}) => {
  const levelClasses = parseClasses([
    'level',
    isMobile ? 'is-mobile' : null,
    cssClasses
  ])
  const levelTestId =
    testId ?? parseTestId({ tag: 'level', parsedClasses: levelClasses })
  const memoizedLeftSide = useMemo(
    () => renderLevelSection(leftSide, 'left'),
    [leftSide]
  )
  const memoizedCenterSide = useMemo(
    () => renderLevelSection(centerSide, 'center'),
    [centerSide]
  )
  const memoizedRightSide = useMemo(
    () => renderLevelSection(rightSide, 'right'),
    [rightSide]
  )

  return (
    <nav
      data-testid={levelTestId}
      className={levelClasses}
      style={style ?? undefined}
    >
      {memoizedLeftSide}
      {memoizedCenterSide}
      {memoizedRightSide}
    </nav>
  )
}

export default Level
