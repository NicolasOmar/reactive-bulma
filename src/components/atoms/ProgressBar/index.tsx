import React from 'react'
// TYPES & INTERFACES
import { ProgressBarProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  testId = null,
  style = null,
  color = 'is-primary',
  size = null,
  isLoading = false
}) => {
  const fixedValue: number = value > max || value < 0 ? 0 : value
  const progressClasses: string = parseClasses(['progress', color, size])
  const _testId =
    testId ??
    parseTestId({
      tag: 'progress',
      parsedClasses: progressClasses
    })

  return (
    <progress
      data-testid={_testId}
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
