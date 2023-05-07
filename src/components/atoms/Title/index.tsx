import React from 'react'
import { TitleProps, TitleSectionProps } from '../../../interfaces/atomProps'
import { parseClasses } from '../../../functions/parsers'

const renderTitleSection = (
  section: TitleSectionProps
): React.ReactElement | null => {
  const sectionClasses = parseClasses([
    section?.prop,
    section?.size ?? 'is-6',
    section?.prop === 'title' && section?.isSpaced ? 'is-spaced' : null
  ])

  return section ? (
    <p
      data-testid={section?.testId ?? `${section?.prop}-test`}
      className={sectionClasses}
      style={section.style || undefined}
    >
      {section?.text}
    </p>
  ) : null
}

const Title: React.FC<TitleProps> = ({ main, secondary }) => (
  <>
    {renderTitleSection(main!)}
    {renderTitleSection(secondary!)}
  </>
)

export default Title
