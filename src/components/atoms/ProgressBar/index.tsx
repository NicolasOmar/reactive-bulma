import React from 'react'
// TYPES & INTERFACES
import { ProgressBarProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const ProgressBar: React.FC<ProgressBarProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  value = 0,
  max = 100,
  color = 'primary',
  size = null,
  isLoading = false
}) => {
  const progressBaseClass = 'progress'
  const fixedValue: number = value > max || value < 0 ? 0 : value
  const progressClasses: string = parseClasses([
    progressBaseClass,
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    cssClasses
  ])
  const progressTestId =
    testId ??
    parseTestId({
      tag: progressBaseClass,
      parsedClasses: progressClasses
    })

  return (
    <progress
      data-testid={progressTestId}
      className={progressClasses}
      style={style ?? undefined}
      value={isLoading ? undefined : value}
      max={max}
    >
      {`${isLoading ? 0 : fixedValue}%`}
    </progress>
  )
}

export default ProgressBar
