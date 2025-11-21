import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { HeroProps } from '@interfaces/organismProps'
import { ChildrenType, HeroContentType } from '@customTypes/domTypes'
import { SizeWithHeightType } from '@customTypes/styleTypes'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const heroBaseClass = 'hero'

const renderHeroSection = (
  content: ChildrenType | null,
  type: HeroContentType,
  testId: string,
  size: SizeWithHeightType | null
) =>
  type === 'body' || size === 'fullheight' ? (
    <section
      data-testid={`${testId}-${type}`}
      className={`${heroBaseClass}-${type}`}
    >
      {content}
    </section>
  ) : null

const Hero: React.FC<HeroProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  header = null,
  body,
  footer = null,
  color = null,
  size = null
}) => {
  const heroClasses = parseClasses([
    heroBaseClass,
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    cssClasses
  ])
  const heroTestId =
    testId ?? parseTestId({ tag: heroBaseClass, parsedClasses: heroClasses })

  return (
    <section
      data-testid={heroTestId}
      className={heroClasses}
      style={style ?? undefined}
    >
      {renderHeroSection(header, 'head', heroTestId, size)}
      {renderHeroSection(body, 'body', heroTestId, size)}
      {renderHeroSection(footer, 'foot', heroTestId, size)}
    </section>
  )
}

export default Hero
