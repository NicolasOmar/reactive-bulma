import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { SectionProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Section: React.FC<SectionProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  content,
  size = null
}) => {
  const sectionClasses = parseClasses(['section', size, cssClasses])
  const sectionTestId =
    testId ?? parseTestId({ tag: 'section', parsedClasses: sectionClasses })

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
