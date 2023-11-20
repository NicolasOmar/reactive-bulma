import React from 'react'
// TYPES & INTERFACES
import { TitleProps, TitleSectionProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/parsers'

const renderTitleSection = (
  section: TitleSectionProps
): React.ReactElement | null => {
  const { type, size, isSpaced, cssClasses } = section
  const sectionClasses = parseClasses([
    type,
    size ?? null,
    type === 'title' && isSpaced ? 'is-spaced' : null,
    cssClasses!
  ])
  const sectionTestId = section?.testId ?? `${section?.type}-test`

  return (
    <p
      data-testid={sectionTestId}
      className={sectionClasses}
      style={section?.style ?? undefined}
    >
      {section?.text}
    </p>
  )
}

const Title: React.FC<TitleProps> = ({ main, secondary }) => (
  <>
    {main ? renderTitleSection(main) : null}
    {secondary ? renderTitleSection(secondary) : null}
  </>
)

export default Title
