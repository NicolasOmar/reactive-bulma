import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { TitleProps, TitleSectionProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses } from '@functions/parsers'

const renderTitleSection = (
  section?: TitleSectionProps
): React.ReactElement | null => {
  if (section === undefined) return null

  const { type, size, isSpaced, cssClasses } = section
  const titleSectionClasses = parseClasses([
    type,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    type === 'title' && isSpaced ? 'is-spaced' : null,
    cssClasses
  ])
  const titleSectionTestId = section?.testId ?? `test-${section?.type}`

  return (
    <p
      data-testid={titleSectionTestId}
      className={titleSectionClasses}
      style={section?.style ?? undefined}
    >
      {section?.text}
    </p>
  )
}

const Title: React.FC<TitleProps> = ({ main, secondary }) => {
  const memoizedMainTitleSection = useMemo(
    () => renderTitleSection(main),
    [main]
  )
  const memoizedSecondaryTitleSection = useMemo(
    () => renderTitleSection(secondary),
    [secondary]
  )

  return (
    <>
      {memoizedMainTitleSection}
      {memoizedSecondaryTitleSection}
    </>
  )
}

export default Title
