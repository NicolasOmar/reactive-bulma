import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { TitleProps, TitleSectionProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses } from '@functions/parsers'

const renderTitleSection = (
  section?: TitleSectionProps,
  isSkeleton?: boolean
): React.ReactElement | null => {
  if (section === undefined) return null

  const { type, size, isSpaced, cssClasses } = section
  const titleSectionClasses = parseClasses([
    type,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    type === 'title' && isSpaced ? 'is-spaced' : null,
    isSkeleton ? COMMON_CLASSES.SKELETON : null,
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

const Title: React.FC<TitleProps> = ({ main, secondary, isSkeleton }) => {
  const memoizedMainTitleSection = useMemo(
    () => renderTitleSection(main, isSkeleton),
    [main, isSkeleton]
  )
  const memoizedSecondaryTitleSection = useMemo(
    () => renderTitleSection(secondary, isSkeleton),
    [secondary, isSkeleton]
  )

  return (
    <>
      {memoizedMainTitleSection}
      {memoizedSecondaryTitleSection}
    </>
  )
}

export default Title
