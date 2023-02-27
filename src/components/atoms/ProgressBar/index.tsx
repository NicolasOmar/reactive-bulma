import React from 'react'
import { parseClasses } from '../../../functions/persers'
import { ProgressBarProps } from '../../../interfaces/atomProps'

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  style = null,
  color = 'is-primary',
  size = null,
  isLoading = false
}) => {
  const progressClasses = parseClasses(['progress', color, size])

  return (
    <progress
      data-testid='test-progress-bar'
      className={progressClasses}
      style={style ?? undefined}
      value={isLoading ? undefined : value}
      max={max}
    >
      {`${isLoading ? 0 : value > max ? 0 : value}%`}
    </progress>
  )
}

export default ProgressBar
