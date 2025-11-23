import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { SectionProps } from '@interfaces/moleculeProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Section: React.FC<SectionProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  content,
  size = null
}) => {
  const sectionBaseClass = 'section'
  const sectionClasses = parseClasses([
    sectionBaseClass,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    cssClasses
  ])
  const sectionTestId =
    testId ??
    parseTestId({ tag: sectionBaseClass, parsedClasses: sectionClasses })

  return (
    <section
      data-testid={sectionTestId}
      className={sectionClasses}
      style={style ?? undefined}
    >
      {content}
    </section>
  )
}

export default Section
