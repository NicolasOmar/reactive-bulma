import React from 'react'
// TYPES & INTERFACES
import { ProgressBarProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const ProgressBar: React.FC<ProgressBarProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  value = 0,
  max = 100,
  color = 'is-primary',
  size = null,
  isLoading = false
}) => {
  const fixedValue: number = value > max || value < 0 ? 0 : value
  const progressClasses: string = parseClasses([
    'progress',
    color,
    size,
    cssClasses
  ])
  const progressTestId =
    testId ??
    parseTestId({
      tag: 'progress',
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
