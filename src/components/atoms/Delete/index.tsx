import React from 'react'
// TYPES & INTERFACES
import { DeleteProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Delete: React.FC<DeleteProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  size = null,
  onClick = null
}) => {
  const deleteBaseClass = 'delete'
  const deleteClasses = parseClasses([
    deleteBaseClass,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    cssClasses
  ])
  const deleteTestId =
    testId ??
    parseTestId({
      tag: deleteBaseClass,
      parsedClasses: deleteClasses
    })

  return (
    <button
      data-testid={deleteTestId}
      className={deleteClasses}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    />
  )
}

export default Delete
