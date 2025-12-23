import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { SkeletonProps } from '@interfaces/atomProps'
// CONSTANTS
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Skeleton: React.FC<SkeletonProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children,
  displayType = 'block'
}) => {
  const skeletonBaseClass = `skeleton-${displayType}`
  const skeletonClasses = parseClasses([skeletonBaseClass, cssClasses])
  const skeletonTestId =
    testId ??
    parseTestId({
      tag: skeletonBaseClass,
      parsedClasses: skeletonClasses
    })

  return (
    <section
      data-testid={skeletonTestId}
      className={skeletonClasses}
      style={style ?? undefined}
    >
      {children}
    </section>
  )
}

export default Skeleton
