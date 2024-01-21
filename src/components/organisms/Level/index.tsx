import React from 'react'
// COMPONENTS
import { LevelItem } from '../../molecules'
// TYPES & INTERFACES
import { LevelProps } from '../../../interfaces/organismProps'
import { LevelItemProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const renderLevelSection = (levelItemList: LevelItemProps[]) =>
  levelItemList.map(_levelItemConfig => (
    <LevelItem
      key={`level-item-${generateKey()}`}
      {..._levelItemConfig}
    />
  ))

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

  return (
    <nav
      data-testid={levelTestId}
      className={levelClasses}
      style={style ?? undefined}
    >
      {leftSide ? (
        <section className='level-left'>{renderLevelSection(leftSide)}</section>
      ) : null}
      {centerSide ? renderLevelSection(centerSide) : null}
      {rightSide ? (
        <section className='level-right'>
          {renderLevelSection(rightSide)}
        </section>
      ) : null}
    </nav>
  )
}

export default Level
