import React from 'react'
// TYPES & INTERFACES
import { DeleteProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Delete: React.FC<DeleteProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  size = null,
  onClick = null
}) => {
  const deleteClasses = parseClasses(['delete', size, cssClasses])
  const deleteTestId =
    testId ??
    parseTestId({
      tag: 'delete',
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
